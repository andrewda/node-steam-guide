# Friend Requests
In this chapter we will be learning about friend requests, currently in steam-user there is a lisenter to a friendStatus change to do this you will just need to add these lines of code to your script,
```
client.on('friendRelationship', function(sid, relationship) {
  //What happens when relationship changes.
});
```
This listner returnes two varables: sid (steam id) and relationship (relationship change)
Here is a list of all the relationships if you need them:
```
  None(0),
	Blocked(1),
	PendingInvitee(2),
	RequestRecipient(2),
	RequestInitiator(4),
	PendingInviter(4),
	Friend(3),
	Ignored(5),
	IgnoredFriend(6),
	SuggestedFriend(7)
 ```
 Now ill add to my code what to do if a user has sent a friend request (2)
 heres what it looks like now: 
 ```
 client.on('friendRelationship', function(sid, relationship) {
    if (relationship == 2) {
        //What to do when request is sent
    }
});
```
Now that all of our functions are setup we just need to add the user back and maybe say something,
this will be using steam-users addFriend and chatMessage function
```
client.on('friendRelationship', function(sid, relationship) {
    if (relationship == 2) {
        client.addFriend(sid);
        client.chatMessage(sid, 'Hello /u/Arze1 is a god');
    }
});
```
If your code looks like this everything should be working :)

-/u/Arze1
