const mongoose = require('mongoose');

module.exports = mongoose.model('Price', {
	market_hash_name: String,
	price: Number
});
