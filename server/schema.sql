CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username varchar(10),
  message varchar(200),
  roomname varchar(10)
);

CREATE TABLE users (
  id int(6),
  username varchar(10)
)

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    
 *  to create the database and the tables.*/

