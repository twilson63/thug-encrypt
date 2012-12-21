var bcrypt = require('bcrypt');
var SaltLength = 10;

function create(password, callback) {
  bcrypt.hash(password, SaltLength, function(err, hash) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, hash);
  });
}


function validate(password, hash, callback) {
  bcrypt.compare(password, hash, function(err, rsp) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, rsp);
  });
}

module.exports = {
  'create': create,
  'validate': validate
};
