/**
 * # routes.js
 *
 * All the routes available are defined here
 * The endpoints descripe the method (POST/GET...)
 * and the url ('account/login')
 * and the handler
 *
 *
 */
'use strict';
/**
 * ## All the routes are joined
 *
 */
// Accounts
const AccountRoutes = require('../routes/account/endpoints'),
    //General like env & status
    GeneralRoutes = require('../routes/general/endpoints'),
    //Restricted route to prove authentication & authorization
    RestrictedRoutes = require('../routes/restricted/endpoints'),
    //Activities route get activities
    ActivitiesRoutes = require('../routes/activities/endpoints');

let internals = {};

//Concatentate the routes into one array
internals.routes = [].concat(
  AccountRoutes.endpoints,
  GeneralRoutes.endpoints,
  RestrictedRoutes.endpoints,
  ActivitiesRoutes.endpoints);

//set the routes for the server
internals.init = function (server) {
  server.route(internals.routes);
};

module.exports = internals;
