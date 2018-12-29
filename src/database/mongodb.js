/**
 * # mongodb.js
 *
 * All the user information will be documents in MongoDB
 *
 * This class sets up the connection depending on the environment
 *
 */
'use strict';

/**
* ## Imports
*
 */
//use mongoose as the ORM
const Mongoose = require('mongoose'),
    Config = require('../config');


/**
* ## Default the connection string to the development envionment
*
*/
let connection_string = Config.mongodb.ip
      + ':'
      +  Config.mongodb.port
      + '/'
      + Config.mongodb.app;

/**
 * ## Plugging in your own Promises Library
 * in accordance with http://mongoosejs.com/docs/promises.html
 *
 */
Mongoose.Promise = Promise;
Mongoose.connect(connection_string);
