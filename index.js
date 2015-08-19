var http = require('http');
var express = require('express');
var app = require('./config/express')();
require('./config/database')(process.env.MONGOLAB_URI || 'mongodb://localhost/mynight')

http.createServer(app).listen(app.get('port'),function () {
  console.log('Server on');
});
