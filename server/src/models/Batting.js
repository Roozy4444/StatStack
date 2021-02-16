const Model = require('./Model')

class Batting extends Model {
  static get tableName() {
    return 'batting'
  }

  static get jsonSchema() {
    return {
      type: 'object', 
      required: ['atBats', 'hits', 'homeruns', 'rbis', 'strikeouts', 'doubles', 'triples', 'stolenBases', 'userId'],
      properties: {
        atBats: { type: ['integer', 'string'] },
        hits: { type: ['integer', 'string'] },
        homeruns: { type: ['integer', 'string'] },
        rbis: { type: ['integer', 'string'] },
        strikeouts: { type: ['integer', 'string'] },
        doubles: { type: ['integer', 'string'] },
        triples: { type: ['integer', 'string'] },
        stolenBases: { type: ['integer', 'string'] },
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
          from: 'batting.userId',
          to: 'user.id'
        }
      }
    }
  }
}

module.exports = Batting