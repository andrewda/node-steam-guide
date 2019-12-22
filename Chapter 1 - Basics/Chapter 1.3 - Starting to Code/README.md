# Chapter 1.3 - Starting to Code

Once we have our prerequisites installed, we can begin writing the code
necessary to login to Steam and simulate the Steam client. First of all, let's
create a new file and call it `project1.js`. Inside this file, we'll write out
the following code.

```js
const SteamUser = require('steam-user');
const client = new SteamUser();

const logOnOptions = {
  accountName: 'your_steam_username',
  password: 'your_steam_password'
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');
});
```

Now, run the program using `node project1.js`. If you get an error, checkout
the troubleshooting section on the main README. If everything works out fine,
you should be prompted for your 2FA code (if you have 2FA setup on your
account), then you should see the "Logged into Steam" message appear in your
command line.

Now let's walk through how this code works step-by-step.

### Modules

At the top of our program, we see:

```js
const SteamUser = require('steam-user');
const client = new SteamUser();
```

Here, we are `require`ing the `steam-user` module that we previously installed
using NPM, and create a new instance named `client` with `new SteamUser()`. We
could call the `SteamUser` and `client` variables whatever we want, but it's
usually fairly standard to name them fairly closely to their module name.

### Objects

After `require`ing our modules and creating instances, we define a new object.

```js
const logOnOptions = {
  accountName: 'your_steam_username',
  password: 'your_steam_password'
};
```

This `logOnOptions` object is what we'll use to store our `accountName` and
`password` as "keys" within the object.

### Methods

```js
client.logOn(logOnOptions);
```

We then pass this `logOnOptions` object as a parameter to the `logOn` method of
our `client`, which is, again, an instance of `SteamUser`. In other words,
we're telling our `SteamUser` instance to login to the Steam network using our
username and password.

A method is simply some code in the module which we can
use by referencing its name – in this case, `logOn`. We can tell the method to
take some input from us by giving it parameters – the stuff inside of the
parentheses.

### Events

We then proceed to adding an event listener.

```js
client.on('loggedOn', () => {
  console.log('Logged into Steam');
});
```

The `on` method takes two parameters – an event name and a function. When the
`client` emits an event whose name matches the event name we have specified
in the `on` method, the function we provide will be executed.

When `client` emits an event called `loggedOn`, we tell it to execute a
function, defined in this case using an arrow function. Using an arrow
function, or `() => { ... }`, is *almost* this same as using `function()`, but
there are some very important differences. We'll get into these differences as
they come up. Inside of our function, we tell Node.js to log "Logged into
Steam" to our command line.

-----

Great! We've created our first Steam bot – but it doesn't really do much. It's
a little disappointing to login to Steam but get no reward – we don't even
change our status to online! Well, we can easily make that change. Let's add
some code onto our beautifully simple bot.

We're going to add some code to the `loggedOn` event listener to make it change
its status to online and start playing some good ol' Team Fortress 2.

```js
client.on('loggedOn', () => {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed(440);
});
```

If we run the file now using `node project1.js`, we should see "Logged into
Steam" in the command line again, but now if we check our Steam profile, we
should be online and playing TF2.

These two lines are all we need to have our bot change its status to online and
start playing TF2. The `setPersona` method can take two parameters, the first
being an [EPersonaState constant](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EPersonaState.js),
and the second being a persona name. The persona name is not required, but can
be set if you would like to change your Steam name. For example, we could use:

```js
client.setPersona(SteamUser.EPersonaState.Online, 'andrewda');
```

to change our Steam name to "andrewda". The `gamesPlayed` method takes one
parameter – a Steam game's appid or a string for a non-Steam game. It can also
be used to idle in multiple games at the same time, but we won't get into that
during this guide. Do note that you must have the game in order to play it,
unless the game is free like TF2.

[Continue Reading](../Chapter%201.4%20-%20TOTP)
