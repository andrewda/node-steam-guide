const mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    market_hash_name: String,
    assetid: String,
    image: String,
    price: Number
});
