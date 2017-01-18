const mongoose = require('mongoose');

module.exports = mongoose.model('Inventory', {
    steamid: String,
	updated: Number,
	items: [
        {
            market_name: String,
            assetid: String,
            image: String,
            price: Number
        }
    ]
});
