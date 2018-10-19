const _ = require('lodash');
const request = require('request');

const Price = require('../models/price');

module.exports = interval => {
  update();

  setInterval(update, interval);
};

function update() {
  request('https://api.csgofast.com/price/all', (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      let json = {};

      try {
        json = JSON.parse(body);
      } catch (e) {
        console.log(e);
      }

      _.forOwn(json, (price, market_hash_name) => {
        Price.update(
          { market_hash_name },
          {
            $set: { price }
          },
          { upsert: true },
          err => {
            if (err) {
              console.log(err);
            }
          }
        );
      });
    }
  });
}
