# Chapter 6.3 - Beginning the Connection

After the last chapter, we now have an absolutely _stunning_ website with a
backend that "responds" to the user's actions using Socket.io. Alright, I won't
lie, the website doesn't _actually_ look the best, but it does what it's
supposed to, and that's what's important. In this chapter, we'll begin to
connect the website and the bot so that when the user clicks on an item, the
bot sends him or her a trade offer with that item. Let's get started with the
code.

We won't need to change the front-end of the website at all in this section –
it all should work fine from the previous section. We will, however, need to
add some bot code to our website's backend. Let's create a new directory named
`bots`. In it, we'll make a file called `index.js`. We're going to be defining
a Class – something new in ES6 that will make this all a lot easier. If you're
not already familiar with ES6 Classes, you should probably read up on them
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
before continuing.

```js
// bots/index.js

const SteamUser = require('steam-user');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');
```

We'll start of by requiring our dependencies. We'll be using the same libraries
we have been, so I shouldn't need to explain what each one does.

```js
// bots/index.js

class SteamBot {

}
```

This will be the base for our bot. It's just a vanilla class, so we should
probably start adding to it. Let's start with a constructor.

```js
// bots/index.js

class SteamBot {
    constructor(logOnOptions) {
		this.client = new SteamUser();
		this.community = new SteamCommunity();
		this.manager = new TradeOfferManager({
			steam: this.client,
			community: this.community,
			language: 'en'
		});

		this.logOn(logOnOptions);
	}
}
```

The `constructor` is called whenever someone makes a new instance of the
`SteamBot` class. For this class, we're going to need to pass in the
logOnOptions – `new SteamBot(logOnOptions)`. When we create a new SteamBot,
we're going to start off by setting up internal instances of the SteamUser,
SteamCommunity, and TradeOfferManager libraries, similarly to how we set them
up earlier. Then we'll call the `logOn` method, which we'll define next.

```js
// bots/index.js

class SteamBot {
    constructor() { ... }

    logOn(logOnOptions) {
		this.client.logOn(logOnOptions);

		this.client.on('loggedOn', () => {
			console.log('Logged into Steam');

			this.client.setPersona(SteamUser.Steam.EPersonaState.Online);
			this.client.gamesPlayed(730);
		});

		this.client.on('webSession', (sessionid, cookies) => {
			this.manager.setCookies(cookies);

			this.community.setCookies(cookies);
			this.community.startConfirmationChecker(10000, 'identity secret');
		});
	}
}
```

This is all almost identical to what we had in earlier chapters, but just in a
slightly new format. Next, we should define two new methods which will be used
to send trade offers.

```js
// bots/index.js

class SteamBot {
    constructor() { ... }
    logOn() { ... }

    sendDepositTrade(partner, assetid, callback) {
		const offer = this.manager.createOffer(partner);

		this.manager.getUserInventoryContents(partner, 730, 2, true, (err, inv) => {
			if (err) {
				console.log(err);
			} else {
				const item = inv.find((item) => item.assetid == assetid);

				if (item) {
					offer.addTheirItem(item);
					offer.setMessage('Deposit item on the website!');
					offer.send((err, status) => {
						callback(err, (status === 'sent' || status === 'pending'), offer.id);
					});
				} else {
					callback(new Error('Could not find item'), false);
				}
			}
		});
	}

	sendWithdrawTrade(partner, credits, assetid, callback) {
		const offer = this.manager.createOffer(partner);

		this.manager.getInventoryContents(730, 2, true, (err, inv) => {
			if (err) {
				console.log(err);
			} else {
				const item = inv.find((item) => item.assetid === assetid);

				if (item) {

					// Check to make sure the user can afford the item here

					offer.addMyItem(item);
					offer.setMessage('Withdraw item from the website!');
					offer.send((err, status) => {
						callback(err, (status === 'sent' || status === 'pending'), offer.id);
					});
				} else {
					callback(new Error('Could not find item'), false);
				}
			}
		});
	}
}
```

Alright – these two new methods are incredibly similar, only diverging on a
couple lines. The `sendDepositTrade()` method will take 3 parameters, our
partner, the item's assetid, and a callback. We start off by creating a new
trade offer, then loading our partner's inventory with the
`getUserInventoryContents()` method. If you remember from the earlier chapters,
this method will include an array of items in the callback, which we will call
`inv`. We use JavaScript's `find()` method on the `inv` array to find the item
with the same assetid. Then, after verifying that we found an item, we add the
item to the offer and send it.

The `sendWithdrawTrade()` method will currently work almost identically to the
previous method, but eventually we'll need to make sure that the user has
enough credits to buy the item they're trying to withdraw.

At the bottom of our `bots/index.js` file, we'll need to export our SteamBot
class for use in other files:

```js
// bots/index.js

class SteamBot {
    constructor() { ... }
    logOn() { ... }
    sendDepositTrade() { ... }
    sendWithdrawTrade() { ... }
}

module.exports = SteamBot;
```

That'll do it for now in the bot file. Let's move over to our `app.js` for some
quick additions.

```js
// app.js

[...]

const SteamTotp = require('steam-totp');
const SteamBot = require('./bots');

const bot = new SteamBot({
	accountName: 'username',
	password: 'password',
	twoFactorCode: SteamTotp.generateAuthCode('shared secret')
});
```

Along with your other imports near the top of the file, you should require the
`./bots` path in order to get the class you just made. Then, create a new
instance of the class using `new SteamBot()` with your log on options. You'll
also need to require the `steam-totp` if it's not already imported.

Now let's actually send the offer when a user clicks on an item. We'll need to
add some code to our Socket.io handlers.

```js
// app.js

io.on('connection', (socket) => {
	socket.on('deposit', (data) => {
		const user = socket.request.user;
		console.log(`${user.personaname} is depositting ${data.assetid}`);

		bot.sendDepositTrade(user.steamid, data.assetid, (err, success, tradeOffer) => {
			// TODO: Handle these events on the website
			if (err && !success) {
				socket.emit('failure', { message: 'We could not process your request at this time.' });
			} else {
				socket.emit('success', { tradeOffer });
			}
		});
	});

	socket.on('withdraw', (data) => {
		const user = socket.request.user;
		console.log(`${user.personaname} is withdrawing ${data.assetid}`);

		bot.sendWithdrawTrade(user.steamid, user.credits, data.assetid, (err, success, tradeOffer) => {
			// TODO: Handle these events on the website
			if (err && !success) {
				socket.emit('failure', { message: 'We could not process your request at this time.' });
			} else {
				socket.emit('success', { tradeOffer });
			}
		});
	});
});
```

Here, we began to use the methods we just created: `bot.sendDepositTrade()` and
`bot.sendWithdrawTrade()`. We pass in the required parameters to each, and
supply a callback. If there's an error and the request is not successful, we'll
emit a `failure` event. Otherwise, we'll emit the `success` event with the
trade offer's id.

In the next section, we'll handle these events on the website to provide some
user feedback, and make sure that a user is actually allowed to withdraw a
specific item.
