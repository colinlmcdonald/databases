var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      var parsedUser = user;
      console.log(user);
      //console.log('THIS IS CONNECTION QQQQQQ', Object.keys(connection.connection));
      connection.connection.query('INSERT INTO messages (username) VALUES (?)', user);

      //doesnt seem like it's connection, probably the .query
      //check asynch with database connection


      //console.log(Object.keys(req));
      //console.log(user);
    }
  }
};

