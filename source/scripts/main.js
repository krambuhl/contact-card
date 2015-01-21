var ready = require('domready');

var Contacts = require('./contacts');

window.EApp = {};

ready(function() {
  window.EApp.contacts = new Contacts('.l-contacts');
});