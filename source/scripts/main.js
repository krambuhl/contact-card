var socket = require('socket.io-client')('http://localhost:4201');
var ready = require('domready');

var bank = require('./bank.js');
var TwitterView = require('./twitter/index.js');

socket.on('data', function(data) {
  bank.dispatch(data);
});


window.kram = {
  bank: bank,
  twitter: new TwitterView('.l-twitter') 
};

