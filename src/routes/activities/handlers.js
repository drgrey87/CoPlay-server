/**
 * # account/handlers.js
 *
 * This handles all the account actions
 *
 *
 */
'use strict';
/**
 * ## Imports
 *
 */
//Boom is an abstraction over http error codes
var Boom = require('boom'),
  // our configuration
  CONFIG = require('../../config'),
  // our encrpyt and decrypt
  Crypto = require('../../lib/Crypto'),
  // support for token signing and verification
  JasonWebToken = require('jsonwebtoken'),
  // the Hapi strategy for jwt
  JwtAuth = require('../../auth/jwt-strategy'),
  // how we email
  Mailer = require('../../lib/Mailer'),
  // time/date functions
  Moment = require('moment'),
  // the client for redis
  redisClient = require('../../database/redis'),
  // helper library
  _ = require('underscore'),
  // our user in mongodb
  Activity = require('../../database/models/Activity'),
  //mongoose
  mongoose = require('mongoose'),
  ObjectId = mongoose.Types.ObjectId;

var internals = {};

/**
 * ## getMyProfile
 *
 * We only get here through authentication
 *
 * note: the user is available from the credentials!
 */
internals.getMyActivities = function (req, reply) {
  console.log('req.auth.credentials._id', req.auth.credentials._id);
  Activity.findBy({user_id: new ObjectId(req.auth.credentials._id)})
    .then(activities => {
      reply(activities)
    })
    .catch(err => reply(Boom.badImplementation(err)));
};

module.exports = internals;
