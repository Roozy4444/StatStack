/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('fielding', (table) => {
    table.bigIncrements('id').primary()
    table.integer('putOuts').notNullable
    table.integer('assists').notNullable
    table.integer('errors').notNullable
    table.integer('doublePlays').notNullable
    table.bigInteger('userId').unsigned().notNullable().index().references('users.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('fielding')
}
