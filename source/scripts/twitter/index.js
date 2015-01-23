var inherits = require('inherits');

var TwitterStore = require('./twitter.store.js');
var View = require('../modules/view.js');


function TwitterView(el, opts) {
  View.apply(this, arguments);
  this.setStore(new TwitterStore());
}

inherits(TwitterView, View);

TwitterView.prototype.cleanup = function() {
  this.store.destroy();
};

module.exports = TwitterView;