const Bcrypt = require('bcrypt');
const unique = require('objection-unique');
const Model = require('./Model');

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ['email'],
  identifiers: ['id'],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return 'users';
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'email', 'lastName', 'cryptedPassword'],

      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        cryptedPassword: { type: 'string' }
      },
    };
  }
  static get relationMappings() {
    const { Batting, Fielding, Pitching } = require('./index.js')

    return {
      batting: {
        relation: Model.HasManyRelation,
        modelClass: Batting, 
        join: {
          from: 'users.id',
          to: 'batting.userId'
        }
      }, 
      fielding: {
        relation: Model.HasManyRelation,
        modelClass: Fielding, 
        join: {
          from: 'users.id',
          to: 'fielding.userId'
        }
      }, 
      pitching: {
        relation: Model.HasManyRelation,
        modelClass: Pitching, 
        join: {
          from: 'users.id',
          to: 'pitching.userId'
        }
      }   
    }
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }
    return serializedJson;
  }
}

module.exports = User;
