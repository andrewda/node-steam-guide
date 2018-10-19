# Chatting With Friends

So we have added friends, now let's talk to them ! The `steam-user` module
emits an event `friendMessage` whenever a friend messages us. We will use it
as follows :

```js
client.on('friendMessage', (steamid, message) => {
  // A friend with `steamid` has sent us a chat message saying `message`
});
```

This also emits two parameters along with the event: the user's `steamid`,
and the message the user has sent us.

Now let's reply to our friend when he sends us a message :

```js
client.on('friendMessage', (steamid, message) => {
  client.chatMessage(steamid,"Hello There !");
});
```

Now we have added a listener for the `friendMessage` event. Also we now
reply to any user who sends us a message, regardless of his message. We use the
`.chatMessage` method we learnt about before to send the reply.

Great ! Now the bot talks to us ! Now let's try to teach the bot some specific
replies or commands.

```js
client.on('friendMessage', (steamid, message) => {
  if (message === "Hello") {
    client.chatMessage(steamid,"Hello There !");
  }
});
```

Now we have added a `if` condition that checks if the reply is what we expect.
The bot will now reply with a warm `Hello There !` whenever a user sends a
message saying `Hello`. But the bot won't reply when the expected message
not sent, so to deal with that we add a `else` condition.

```js
client.on('friendMessage', (steamid, message) => {
  if (message === "Hello") {
    client.chatMessage(steamid,"Hello There !");
  } else {
    client.chatMessage(steamid,"I failed to understand you :/")
  }
});
```

Now the bot will be reply saying `I failed to understand you :/` whenever an
user sends us an unexpected message. Now try adding some of your own `else if`
conditions. A working example of this has been added to the final code.

For the final working code, check out project4.js. Please do try adding an
`else if` condition yourself before seeing the final code, practising on your 
own self is better than copy-pasting.


This chapter was written by [@DentFuse](https://github.com/DentFuse) for
[Steam-Bot-Basics/node-steam-guide](https://github.com/Steam-Bot-Basics/node-steam-guide).
