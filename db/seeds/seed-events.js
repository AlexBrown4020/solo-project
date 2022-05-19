/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del();
  await knex('events').insert([
    {title: "First day of Code Chrysalis", date: new Date("2022-02-14"), description: "Students meet for the first time"},
    {title: "Laundry Week", date: new Date("2022-04-12"), description: "Students have a break, and time to catch up on old repos."},
    {title: "First Projects", date: new Date("2022-04-26"), description: "Students begin their first projects "}
  ]);
};
