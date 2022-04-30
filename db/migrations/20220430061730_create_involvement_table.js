const { stringify } = require("nodemon/lib/utils");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema
    .createTable('involvement', function(table) {
        table
            .integer('actor_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actors')
        table
            .string('event_title')
            .references('title')
            .inTable('events')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("involvement");
};
