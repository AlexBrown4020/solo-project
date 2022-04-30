/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema
  .alterTable('actors', function(table) {
    table.date('date_of_birth')
    table.integer('age')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema
  .alterTable('actors', function(table) {
      table.dropColumn('date_of_birth');
      table.dropColumn('age');
  })
};
