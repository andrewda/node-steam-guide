const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const path = require('path');
const config = require('./config.json');

const app = express();
const hbs = handlebars.create();

passport.serializeUser((user, done) => {
	done(null, user._json);
});

passport.deserializeUser((obj, done) => {
	done(null, obj);
});

passport.use(new SteamStrategy({
		returnURL: 'http://localhost:3037/auth/steam/return',
		realm: 'http://localhost:3037/',
		apiKey: config.apiKey
	}, (identifier, profile, done) => {
		return done(null, profile);
	}
));

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
	secret: config.secretString,
    name: 'U_SESSION',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.render('main', {
		user: req.user
	});
});

app.get(/^\/auth\/steam(\/return)?$/,
	passport.authenticate('steam', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('/');
	});

app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

app.listen(3037);
