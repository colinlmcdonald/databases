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
      console.log('THIS IS CONNECTION QQQQQQ', connection);
      connection.query('INSERT INTO messages VALUES ?', user);

      //doesnt seem like it's connection, probably the .query



      //console.log(Object.keys(req));
      //console.log(user);
    }
  }
};

