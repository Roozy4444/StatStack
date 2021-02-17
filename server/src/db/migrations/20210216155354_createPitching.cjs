/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('pitching', (table) => {
    table.bigIncrements('id').primary()
    table.integer('win').notNullable()
    table.integer('loss').notNullable()
    table.integer('inningsPitched').notNullable()
    table.integer('strikeouts').notNullable()
    table.integer('earnedRuns').notNullable()
    table.integer('baseOnBalls').notNullable()
    table.integer('hits').notNullable()
    table.integer('saves').notNullable()
    table.bigInteger('userId').unsigned().notNullable().index().references('users.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('pitching')
}
