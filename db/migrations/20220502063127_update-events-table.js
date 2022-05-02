/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema
    .createTable('events', function(table) {
        table.string('title', 64).primary();
        table.date('date');
        table.string('description', 500);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
      return await knex.schema
      .dropTable('events');
  };