const db = require('../database');
const tb = 'cars';

exports.list = id => id ? db(tb).where({ id }) : db(tb);
exports.new = data => db(tb).insert(data);
exports.remove = id => db(tb).where({ id }).del();
exports.update = (id, data) => db(tb).where({ id }).update(data);