/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('involvement').del()
  await knex('involvement').insert([
    {actor_id: 1, event_title: 'First day of Code Chrysalis'},
    {actor_id: 2, event_title: 'First day of Code Chrysalis'},
    {actor_id: 3, event_title: 'First day of Code Chrysalis'},
    {actor_id: 9, event_title: 'First day of Code Chrysalis'},
    {actor_id: 5, event_title: 'First day of Code Chrysalis'},
    {actor_id: 6, event_title: 'First day of Code Chrysalis'},
    {actor_id: 7, event_title: 'First day of Code Chrysalis'},
  ]);
};
