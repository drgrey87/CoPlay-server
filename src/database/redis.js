/**
 * # redis.js
 *
 * This is the configuration for Redis
 *
 */
'use strict';
/**
 * ## Imports
 *
 */
const Redis = require('redis'),
    Config = require('../config');

  //running locally - make sure you've started redis server

module.exports = Redis.createClient(Config.redis);;

