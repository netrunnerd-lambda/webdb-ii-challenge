const db = require('../database');
const tb = 'cars';

exports.list = id => id ? db(tb).where({ id }) : db(tb);
exports.new = data => db(tb).insert(data).then(([ id ]) => this.list(id));
exports.remove = id => db(tb).where({ id }).del();
exports.update = (id, data) => {
  return db(tb)
          .where({ id })
          .update(data)
          .then(() => this.list(id));
};