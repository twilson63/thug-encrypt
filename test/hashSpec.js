var hash = require('../hash');
var assert = require('assert');

describe('hash', function(){
  var token = null;
  it('create hash', function(done){
    hash.create('foo', function(err, rsp){
      assert.ok(hash, 'should create hash');
      token = rsp;
      done();
    });
  });
  it('validate hash', function(done){
    hash.validate('foo', token, function(e, rsp) {
      assert.ok(rsp);
      done();
    });
  });
  it('validate hash', function(done){
    hash.validate('bar', token, function(e, rsp) {
      assert.ok(rsp === false);
      done();
    });
  });

});