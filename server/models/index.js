var connection = require('../db/index.js');
var controllers = require('../controllers/index.js')

module.exports = {
  messages: {
    get: function () {
      
    }, // a function which produces all the messages
    post: function (message, cb) {
      // console.log(message);
      // var values = [[message.username, message.message, message.roomname]];
      // console.log(values);
       connection.connection.query("INSERT INTO messages (username, message, roomname) VALUES ('" + message.username + "', '" + message.message + "', '" + message.roomname + "');", function(err, results) {
        if (err) {
          console.log(err);
          //cb(err);
        } cb(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
            console.log('inside model users')

    },
    post: function (user, cb) {
      var parsedUser = user;
      //console.log(user);
      //console.log('THIS IS CONNECTION QQQQQQ', Object.keys(connection.connection));
      connection.connection.query('INSERT INTO users (username) VALUES (?)', user, function(err, results) {
        if (err) {
          console.log(err);
          //cb(err);
        } cb(results);
      });

      //doesnt seem like it's connection, probably the .query
      //check asynch with database connection


      //console.log(Object.keys(req));
      //console.log(user);
    }
  }
};

