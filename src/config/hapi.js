'use strict';

const Config = require('../config'),
    //Hapi itself
    Hapi = require('hapi'),
    // the authentication strategy
    JwtAuth = require('../auth/jwt-strategy'),
    // kind of like underscore, but specific to Hapi
    Hoek = require('hoek'),
    // some additional services
    plugins = require('./plugins'),
    // the routes we'll support
    Routes = require('./routes'),
    // the view, mainly for reset password
    Views = require('./views');

//The real Hapi server!
let server = new Hapi.Server();

//Setup the connection for the environment
server.connection({
  port: Config.hapi.port,
  address: Config.hapi.ip
});

// register plugins
server.register(plugins, (err) => {
  Hoek.assert(!err,err);
});
// configure jwt strategy
JwtAuth.setStrategy(server);

//setup views for resetpassword
Views.init(server);

// set routes
Routes.init(server);

module.exports = server;
