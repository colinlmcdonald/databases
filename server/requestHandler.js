var mysql = require('mysql');
var app = require('./app.js');
var express = require('express');
var controllers = require('./controllers');


// exports.requestHandler = function(request, response) {

//   console.log("Serving request type " + request.method + " for url " + request.url);
//   console.log('Data request: ', response.data);

//   var statusCode = 200;

//   var headers = defaultCorsHeaders;

//   headers['Content-Type'] = "application/json";

// if (request.method === 'POST') {
//   statusCode = 201;
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     var parsedData = JSON.parse(data);
//     //TODO push into database
//     response.writeHead(statusCode, headers);
//     //TODO stringify data
//       var getResult = JSON.stringify(object);
//       //what do we do with .end()?
//     response.end(getResult);
//   })
// }

// if (request.method === 'GET') {
//   if(request.url === '/classes/room1' || request.url === '/classes/messages'){
//     //TODO change object here
//   var getResult = JSON.stringify(object);
//   response.end(getResult);
//   } else{
//     response.writeHead(404, headers);
//     response.end();
//   }
// };

// response.writeHead(statusCode, headers);
// };


