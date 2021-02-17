const Model = require('./Model')

class Pitching extends Model {
  static get tableName() {
    return 'pitching'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['win', 'loss', 'inningsPitched', 'strikeouts', 'earnedRuns', 'baseOnBalls', 'hits', 'saves', 'userId'], 
      properties: {
        win: { type: ['integer', 'string'] },
        loss: { type: ['integer', 'string'] },
        inningsPitched: { type: ['integer', 'string'] },
        strikeouts: { type: ['integer', 'string'] },
        earnedRuns: { type: ['integer', 'string'] },
        baseOnBalls: { type: ['integer', 'string'] },
        hits: { type: ['integer', 'string'] },
        saves: { type: ['integer', 'string'] },
        userId: { type: ['integer', 'string'] },
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
          from: 'pitching.userId',
          to: 'user.id'
        }
      }
    }
  }
}

module.exports = Pitching