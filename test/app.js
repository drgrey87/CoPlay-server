'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const assert = require('assert'),
  server = require('../server'),
  chai = require('chai'),
  expect = chai.expect,
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});