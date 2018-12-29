'use strict';

const HapiServer = require('./src/config/hapi');
require('./src/database/mongodb');

HapiServer.start(function (err) {
  if (err) {
    console.log(err);
    return;
  };
  console.log('Server is running: ' + HapiServer.info.uri);
});

