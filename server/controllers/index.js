var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body.username)
    }
  }
};
      // var data = '',
      // req.on('data', function(chunk) {
      //   data += chunk;
      // });
      // req.on('end', function() {
      //   var parsedData = JSON.parse(data);
      //   models.users.post(data);
      //   response.end();
      // })

