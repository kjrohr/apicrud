const db = require('./db.js');

exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};
