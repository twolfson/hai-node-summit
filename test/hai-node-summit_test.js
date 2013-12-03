var assert = require('assert');
var request = require('request');
var Server = require('../');

// TODO: Show off perceptual diffs if we have time =)
describe('hai-node-summit', function () {
  before(function () {
    this.app = new Server(9002);
  });
  after(function (done) {
    this.app.close(done);
  });

  describe('replying to a request', function () {
    before(function (done) {
      var that = this;
      request('http://localhost:9002/', function (err, res, body) {
        that.body = body;
        done(err);
      });
    });
    it('returns "Hello World!"', function () {
      assert.strictEqual(this.body, 'Hello World!\n');
    });
  });
});

