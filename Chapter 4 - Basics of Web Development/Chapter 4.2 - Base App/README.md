# Chapter 4.2 - Base Web App

Let's whip up a basic web app real quick – it shouldn't be too hard! We just
want it to say "Hello World!" when we hit the root path. Let's begin:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3037);
```

Now run it and navigate to `http://127.0.0.1:3037` in your console – you should
get greeted with a friendly "Hello World!" message. Now let's walk through how
this works real quick – it's not very complicated.

First we create an instance of our `express` module named `app`. Then we tell
our `app` to send a "Hello World!" message when anyone hits the root path
(`/`). It might be a good time to note that the `req` parameter is short for
"request", or the request sent to use by the client, while the `res` parameter
is short for "response", or what we send back to the client. Finally, we tell
our `app` to listen on port `3037` at the bottom.

This is a very quick and dirty Express app, but we'll definitely continue
adding on from here in order to create our final site.
