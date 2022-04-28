/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('actors').del()
  await knex('actors').insert([
    {name: 'Alex', country: 'Japan'},
    {name: 'Ravi', country: 'South Korea'},
    {name: 'Eric', country: 'United States'},
  ]);
};
