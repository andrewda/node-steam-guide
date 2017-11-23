const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socket(server);
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

io.on('connection', socket => {
  console.log('a user connected');
  socket.emit('welcome', 'thanks for connecting');
});

server.listen(3037);
