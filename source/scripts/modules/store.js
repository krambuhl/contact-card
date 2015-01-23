var extend = require('extend');

function Store(opts) {
  this.options = opts || {};
  
  this._store = {};
  this._laststore = {};
  this._subs = [];
}

Store.prototype.update = function(data) {
  this._laststore = this._store;
  this._store = data;
};

Store.prototype.setup = function(func) {
  func.apply(this, [this.options]);
};

Store.prototype.cleanup = function() {};


module.exports = Store;