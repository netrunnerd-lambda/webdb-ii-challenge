exports.up = kn => kn.schema.table('cars', tb => {
  tb
    .enum('title_status', ['clean', 'rebuilt', 'salvage', 'irreparable'])
    .defaultsTo('clean');
});

exports.down = kn => kn.schema.table('cars', tb => tb.dropColumn('title_status'));