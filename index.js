var hash = require('./hash');

exports.hash = function(obj, next){
  if (obj.password && obj.password.length > 0) {
    hash.create(obj.password, function(err, h) {
      obj.hash = h;
      next(obj);
    })
  } else {
    next(obj);
  }
}

exports.password = function(obj, next) {
  delete obj.password;
  delete obj.password_confirmation;
  next(obj);
}

exports.clean = function(doc, next) {
  delete doc.hash;
  next(doc);
}

exports.validate = hash.validate;
