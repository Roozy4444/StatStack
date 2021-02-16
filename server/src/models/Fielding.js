const Model = require('./Model')

class Fielding extends Model {
  static get tableName() {
    return 'fielding'
  }

  static get jsonSchema() {
    return {
      type: 'object', 
      required: ['putouts', 'assisits', 'errors', 'doublePlays', 'userId'],
      properties: {
        putouts: { type: ['integer', 'string'] },
        assists: { type: ['integer', 'string'] },
        errors: { type: ['integer', 'string'] },
        doublePlays: { type: ['integer', 'string'] },
        userId: { type: ['bigInteger', 'string'] }
      }
    }
  }

  static get relationMappings() {
    const { User } = require('./index.js')
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'fielding.userId',
          to: 'user.id'
        }
      }
    }
  }
}

module.exports = Fielding