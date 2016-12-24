const mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    name: String,
	price: Number
});
