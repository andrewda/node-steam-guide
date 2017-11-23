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
