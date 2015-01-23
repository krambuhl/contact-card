var inherits = require('inherits');

var bank = require('../bank.js');
var Store = require('../modules/store.js');

function TwitterStore(el, opts) {
  Store.apply(this, arguments);

  this.subscription = bank.subscribe('TWITTER', function(data, opts) {
    console.log(data);
  });
}

inherits(TwitterStore, Store);

TwitterStore.prototype.cleanup = function() {
  bank.unsubscribe(this.subscription);
};




module.exports = TwitterStore;
