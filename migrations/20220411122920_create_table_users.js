exports.up = function(knex, Promise) {
return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 150).notNullable();
    table.string('email', 150).notNullable();
})  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
