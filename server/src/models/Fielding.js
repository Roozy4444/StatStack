const Model = require('./Model')

class Fielding extends Model {
  static get tableName() {
    return 'fielding'
  }

  static get jsonSchema() {
    return {
      type: 'object', 
      required: ['putOuts', 'assists', 'errors', 'doublePlays', 'userId'],
      properties: {
        putOuts: { type: ['integer', 'string'] },
        assists: { type: ['integer', 'string'] },
        errors: { type: ['integer', 'string'] },
        doublePlays: { type: ['integer', 'string'] },
        userId: { type: ['integer', 'string'] }
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