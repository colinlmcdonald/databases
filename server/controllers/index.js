var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req.body, function(results){
        res.send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(results){
         res.send(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside controller users')
    },
    post: function (req, res) {
      console.log()
      models.users.post(req.body.username, function(results) {
          res.send(results);
          // controllers.users.post(res.end(results));
      });
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

