var socket = require('socket.io-client')('http://localhost:4201');
var ready = require('domready');
var Bank = require('message-bank');

var Contacts = require('./contacts');

var kram = {
  bank: new Bank()
};

kram.bank.subscribe('CONTACTS', function(data, opts) {
  console.log(kram.bank._store);
});


socket.on('data', function(data) {
  // console.log(data, kram.bank._store);
  kram.bank.dispatch(data);
});



window.kram = kram;