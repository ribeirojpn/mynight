var http = require('http');
var express = require('express');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'),function () {
  console.log('Server on');
});
