const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/guide');

const Item = mongoose.model(
  'Item',
  mongoose.Schema({
    name: String,
    price: Number
  })
);

const awpAsiimov = new Item({
  name: 'AWP | Asiimov (Field-Tested)',
  price: 27.75
});

const akRedline = new Item({
  name: 'AK-47 | Redline (Field-Tested)',
  price: 5.52
});

awpAsiimov.save((err, item) => {
  if (err) {
    console.log(err);
  } else {
    console.log(item);
  }
});

akRedline.save((err, item) => {
  if (err) {
    console.log(err);
  } else {
    console.log(item);
  }
});
