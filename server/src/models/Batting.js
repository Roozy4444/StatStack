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
          from: 'batting.userId',
          to: 'user.id'
        }
      }
    }
  }
}

module.exports = Batting

// await models.User.query().insertAndFetch({ firstName:'William', lastName: 'Howell', email:'will@baseball.com', cryptedPassword:'test' })

// await models.Batting.query().insertAndFetch({ atBats:5, hits:4, homeruns:1, rbis:6, strikeouts:0, doubles:1, triples:1, stolenBases:1, userId:1 })

// await models.Fielding.query().insertAndFetch({ putOuts:15, assists: 2, errors:1, doublePlays: 1, userId: 1 })

// await models.Pitching.query().insertAndFetch({ win: 0, loss:0, inningsPitched: 2, strikeouts: 5, earnedRuns:0, baseOnBalls: 0, hits:2, saves: 1, userId: 1 })