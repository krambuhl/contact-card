function View(el, opts) {
  this.el = el.nodeType ? el : document.querySelector(el);
  this.options = opts || {};

  if (this.ui) {
    this.setUI(this.ui);
  }
}

View.prototype.setup = function(func) {
  func.apply(this, [this.options]);
};

View.prototype.setUI = function(ui) {
  var cache;
  this._ui = ui;
  for (var name in ui) {
    var els = this.el.querySelectorAll(ui[name]);
    cache[name] = els.length > 1 ? els : els[0];
  }
  this.ui = cache;
};

View.prototype.setStore = function(store) {
  this.store = store;
};

View.prototype.bindStore = function(bindings) {

};

View.prototype.cleanup = function() {};

View.prototype.destroy = function() {
  this.cleanup();
};


module.exports = View;