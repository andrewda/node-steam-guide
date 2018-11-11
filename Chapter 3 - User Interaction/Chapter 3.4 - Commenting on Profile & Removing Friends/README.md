# Commenting On User's Profile & Removing Friends

The `steamcommunity` module also provides us a method to post
comments on a user's profile. this method is `postUserComment`
It takes two parameters, one being the `steamid` of the user,
and the other being the `message` to be posted. 

```js
community.postUserComment(steamid,"My comment");
```

This can also be easily integrated with the chat system:

```js
client.on('friendMessage', (steamid, message) => {
  if (message === "!comment") {
    client.chatMessage(steamid,"Commenting on your profile!");
    community.postUserComment(steamid, "My comment");
  }
});
```

Now about removing friends. The bot, like any other user has a limit
to the number of friends he can have. So we need to make sure that old
friends, who haven't traded or chatted with the bot in a long time are removed.
To do this we `removeFriend` method from the `steamcommunity` module.

The `removeFriend` takes one parameter, the steamid of the user to remove.

```js
client.removeFriend(steamid);
``` 

So this is the basics of user interaction. final code has been added to the 
`project4.js` file, check it out if you have any problems.

This chapter was written by [@DentFuse](https://github.com/DentFuse) for
[Steam-Bot-Basics/node-steam-guide](https://github.com/Steam-Bot-Basics/node-steam-guide).
