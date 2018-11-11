# Sending Group Invites

Now after adding friends we might want to send them group invites,
to do this we use the `inviteToGroup` method from the `steam-user` module. 
 
The `inviteToGroup` method takes 2 parameters, the user's steam id to 
whom the invite will be sent and the group id of the group. Also the 
recipient must be a friend of the bot.
```js
inviteToGroup(userSteamID, groupSteamID)
```

Now let's assume that the steam id and the group id are stored in the
variables `steamid` and `groupid` repectively. Here's how we'll use them
to send a group invite.

```js
client.inviteToGroup(steamid, groupSteamID);
``` 

This can easily be integrated with the chat system as follows:


```js
client.on('friendMessage', (steamid, message) => {
  if (message === "!group") {
    client.chatMessage(steamid,"Sending you a Group Invite!");
    client.inviteToGroup(steamid, groupSteamID);
  }
});
```

This will send a group invite to the message sender whenever he sends us
a `!group` message.

An alternative to this would be to use the `inviteUserToGroup` method of the 
`steamcommunity` module. There isn't much difference, the same parameters are 
taken by `inviteUserToGroup` too.

```js
client.on('friendMessage', (steamid, message) => {
  if (message === "!group") {
    client.chatMessage(steamid,"Sending you a Group Invite!");
    community.inviteUserToGroup(steamid, groupSteamID);
  }
});
```

A working example of this has been added to the `project4.js` file, please
refer to it if you have any issues.

This chapter was written by [@DentFuse](https://github.com/DentFuse) for
[Steam-Bot-Basics/node-steam-guide](https://github.com/Steam-Bot-Basics/node-steam-guide).
