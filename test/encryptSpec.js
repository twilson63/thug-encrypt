var encrypt = require('../');
var assert = require('assert');

describe('encrypt', function(){
  it('hash', function(done) {
    encrypt.hash({password: 'boom'}, function(doc) {
      assert.ok(doc.hash, 'should have hash field');
      done();
    });
  });
  it('password', function(done) {
    encrypt.password({password: 'boom'}, function(doc) {
      assert.ok(!doc.password, 'should not have password field');
      done();
    });
  });
  it('clean', function(done) {
    encrypt.clean({hash: 'foo'}, function(doc) {
      assert.ok(!doc.hash, 'should not have hash field');
      done();
    });
  });
  
});