# Chapter 2.4 - Accepting Donations

Even if this part might not be vital for our bot, it is always useful to have
something very simple which will accept all donations for us. To do this first
we will need to identify what a donation fundamentally is: a donation is when
the user sends us items and we do not send any items back in the trade. Knowing
this we can use our knowledge to implement this very simple concept.

Let's create a new file called `project3.js` and copy the code from 
[Chapter 2.2](../Chapter%202.2%20-%20Handling%20Trade%20Offers). We'll recode 
the `newOffer` event listener so that it will accept incoming donations. 
Delete all the code within the `newOffer` event listener and we can get started.

```js
manager.on('newOffer', offer => {
  if (offer.itemsToGive.length === 0) {
    offer.accept((err, status) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Donation accepted. Status: ${status}.`);
      }
    });
  } else {
    offer.decline(err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Donation declined (wanted our items).');
      }
    });
  }
});
```

With these very simple lines we are first checking if the array which contains
our items (`offer.itemsToGive`) contains 0 items. We are using `.length` to do
this. This property will equal 0 only if `offer.itemsToGive` is empty or
contains no elements. If we think about our previous definition of a donation
then this will indeed mean that if this statement is true then the trade offer
is a donation. If the donation is trying to take items from us, we'll decline
that offer.

Run the file using `node project3.js`. Try sending the bot an offer where you
are giving it items, and one where you are trying to take items. The first
should be accepted, while the second should be declined.
