# Chapter 4.3 - Templates

Ok – we got our basic web app done in the last section, which basically sends
us a "Hello World!" message. Pretty good, but we want to show more information
to our users than just a sentence. For this, we'll use a templating language
called Handlebars. There are some alternatives to Handlebars, such as EJS, but
I happen to like Handlebars due to its simplicity, and I think you'll come to
like it, too. Handlebars allows us to replace `{{variable}}` with a certain
value from our Node.js app.

First of all, let's create a new directory called `views`. This will be where
all of our Handlebars templates go. Then, let's make a file inside of this
directory and call it `main.hbs`. We'll also need to change some of the code we
wrote earlier.

```js
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const hbs = handlebars.create();

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('main', {
    title: 'Hey There, World!',
    message: 'This is a fantastic example of Handlebars!'
  });
});

app.listen(3037);
```

Alright, we changed up the code quite a bit so let's walk through some of the
largest differences. We created a new instance of our `handlebars` module using
`handlebars.create()`. We will later pass more options to this method in order
to customize our `/views` directory. Then, we told our Express `app` to use the
Handlebars engine as the default `view engine`, and we told it to look in the
`/views` directory for different views. Finally, we told our application to
render the `main.hbs` view instead of just a blank page. As this is less of an
HTML tutorial, I'll explain how the following HTML/Handlebars works, but not
future ones. It should be fairly self-explanitory.

```HTML
<!DOCTYPE html>
<html>
	<head>
		<title>{{title}}</title>
	</head>
	<body>
		<h1>Page: {{title}}</h1>
		Message: {{message}}
	</body>
</html>
```

Here, we take the `title` variable, which we render in Express to be `'Hey
There, World!'`. To use this `title` variable in Handlebars, we simply use
`{{title}}`. Then we access our `message` and print it out on the screen as
well. When we load up the page, we should be greeted with something like this:

![webpage.png](./screenshots/webpage.png)

Awesome! Now we know how to use basic templates on our website! We'll begin
using these in the next section to begin making the site more dynamic.

[Continue Reading](../Chapter%204.4%20-%20Databases)
