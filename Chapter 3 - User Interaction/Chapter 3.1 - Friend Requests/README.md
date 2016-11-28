# Friend Requests

In this chapter, we will learn about friend requests. In the `steam-user`
module, there is an event which is emitted every time your relationship with
another user is changed. This event is called `friendRelationship`, and we can
use it like so:

```js
client.on('friendRelationship', (steamid, relationship) => {
    // Code to run when our relationship with `steamid` changes
});
```

This listener emits two parameters along with the event: the user's steamid,
and the new relationship status. Here is a list of the relationships:

```
    None = 0,
	Blocked = 1,
	PendingInvitee = 2,
	RequestRecipient = 2, (alias of PendingInvitee)
    Friend = 3,
	RequestInitiator = 4,
	PendingInviter = 4, (alias of RequestInitiator)
	Ignored = 5,
	IgnoredFriend = 6,
	SuggestedFriend = 7
```

Now we can easily check what our new relationship with a user is, and act upon
it. Let's consider the following code:

```js
client.on('friendRelationship', (steamid, relationship) => {
    if (relationship === 2) {
        // Code to run when we get a `PendingInvitee`
    }
});
```

If we have an event listener like the one above, the code inside of the `if`
statement will only run if the status of the person being updated is
`PendingInvitee`.

Now, we need to add the user back and maybe say something to them. We can
achieve this using `steam-user`'s `.addFriend()` and `.chatMessage()` methods:

```js
client.on('friendRelationship', (steamid, relationship) => {
    if (relationship === 2) {
        client.addFriend(steamid);
        client.chatMessage(steamid, 'Hello there! Thanks for adding me!');
    }
});
```

This code should work well. After starting your bot, add the bot on another
account or have a friend add the account. You should get added back and have
a message sent to you.

Checkout `project4.js` to see the working final code.
