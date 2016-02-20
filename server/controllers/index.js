var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var connection = require('./index.js')


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      // connection.query('INSERT INTO messages values ?', req.body, 
      // function (err, result) {
      //   if (err) console.log(err);
      //   res.send('User added to database with ID: ' + result.insertId);
      // })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //console.log(Object.keys(req));
      console.log(req.body);
      connection.query('INSERT INTO messages username VALUES ?', req.body.username)
    }
  }
};

