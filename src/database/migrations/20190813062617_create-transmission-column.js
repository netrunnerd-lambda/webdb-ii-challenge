exports.up = kn => kn.schema.table('cars', tb => {
  tb
    .enum('transmission', ['automagic', 'manual'])
    .defaultsTo('automagic');
});

exports.down = kn => kn.schema.table('cars', tb => tb.dropColumn('transmission'));