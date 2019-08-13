exports.up = kn => kn.schema.createTable('cars', tb => {
  tb.increments();

  tb
    .string('vin')
    .notNullable()
    .unique();
  
  tb
    .string('make')
    .notNullable();
  
  tb
    .string('model')
    .notNullable();
  
  tb
    .integer('mileage')
    .unsigned()
    .notNullable();
  
  tb
    .timestamps(true, true);
});

exports.down = kn => kn.schema.dropTableIfExists('cars');
