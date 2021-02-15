/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable('users', (table) => {
      table.bigIncrements('id');
      table.string('firstName').notNullable
      table.string('lastName').notNullable
      table.string('email').notNullable().unique();
      table.string('cryptedPassword').notNullable();
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    });
  };

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('users');
};
