/**
 * # ErrorAlert.js
 *
 * This class uses a component which displays the appropriate alert
 * depending on the platform
 *
 * The main purpose here is to determine if there is an error and then
 * plucking off the message depending on the shape of the error object.
 */
'use strict';
/**
 * ## Imports
 *
 */
//Handle the endpoints
var ActivitiesHandlers = require('./handlers'),
  //The static configurations
  CONFIG = require('../../config'),
  //Joi is Hapi's validation library
  Joi = require('joi');

var internals = {};
/**
 * ## Set the method, path, and handler
 *
 * Note the account/logout requires authentication
 *
 * Note the validation of the account/register parameters
 *
 * Note account/register has same Regex expression as Snowflake client
 */
internals.endpoints = [
  {
    method: 'GET',
    path: '/activities',
    handler: ActivitiesHandlers.getMyActivities,
    config: {
      // Include this API in swagger documentation
      auth: 'token',
      tags: ['api'],
      description: 'User\'s Activities',
      notes: 'User clicks link in email sent during registration',
      validate: {
        headers: Joi.object({
          'Authorization': Joi.string()
        }).unknown()
      }
    }
  }
];


module.exports = internals;
