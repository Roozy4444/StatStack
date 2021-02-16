/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('batting', (table) => {
    table.bigIncrements('id').primary()
    table.integer('atBats').notNullable
    table.integer('hits').notNullable
    table.integer('homeruns').notNullable
    table.integer('rbis').notNullable
    table.integer('strikeouts').notNullable
    table.integer('doubles').notNullable
    table.integer('triples').notNullable
    table.integer('stolenBases').notNullable
    table.bigInteger('userId').unsigned().notNullable().index().references('users.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropSchemaIfExists('batting')
}
