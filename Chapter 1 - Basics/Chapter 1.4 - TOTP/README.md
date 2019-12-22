# Chapter 1.4 - Steam TOTP

As you probably already know, Steam has made 2FA mandatory now. This can
fortunately be automatized using the [`steam-totp`](https://github.com/DoctorMcKay/node-steam-totp)
module. Again, this can be installed using `npm install steam-totp`.

Then we're going to add a couple lines to our script. It will look like this
when completed:

```js
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

const client = new SteamUser();

const logOnOptions = {
  accountName: 'your_steam_username',
  password: 'your_steam_password',
  twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed(440);
});
```

If done correctly, running `node project1.js` will now automatically make the
bot login without the need of manually entering the code.

Now let's go through what we added step-by-step. We added two important lines
to our file:

```js
const SteamTotp = require('steam-totp');

[...]

const logOnOptions = {
	[...]
	twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};
```

The first line we added `require`s the `steam-totp` module, while the second
line generates our 2FA code using Steam's TOTP algorithm using your shared
secret code. This is added as a key to the `logOnOptions` object.

## How To Find Your Secrets

You might be wondering where to find the shared secret and there are actually
many tutorials depending on your device. If you are on iPhone you can try
[this](http://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/)
method, while if you are using an Android you can try [this](https://www.reddit.com/r/SteamBot/comments/3w5zwb/info_get_your_2fa_codes_from_android_no_root/)
tutorial. All that you have to know is that the shared secret is used to
generate your 2FA login code, while the identity secret is used for trade and
market confirmations. We will use the identity secret later on when it becomes
necessary. Remember to never share these secrets with anyone as they could
easily sabotage your account.

[Continue Reading](../Chapter%201.5%20-%20Errors)
