const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const Item = require('./models/item');

const app = express();
const hbs = handlebars.create();

mongoose.connect('mongodb://127.0.0.1:27017/guide');

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	Item.find({}, (err, items) => {
		if (err) {
			console.log(err);
		}

		res.render('main', { items });
	});
});

app.listen(3037);
