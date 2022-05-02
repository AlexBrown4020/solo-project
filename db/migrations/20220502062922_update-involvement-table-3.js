/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema
    .alterTable('involvement', function(table) {
    table.dropTable('involvement');

        table.integer('actor_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actors')
            .onDelete('CASCADE')
            .alter();
        table
            .string('event_title')
            .references('title')
            .inTable('events')
            .onDelete('CASCADE')
            .alter();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('involvement');
};
