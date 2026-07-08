"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },

      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
        validate: {
          min: {
            args: [0],
            msg: 'Idade precisa ser um número positivo',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          min: {
            args: [0],
            msg: 'Peso precisa ser um número positivo',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          min: {
            args: [0],
            msg: 'Altura precisa ser um número positivo',
          },
        },
      },
    }, {
      sequelize,
      modelName: 'Aluno',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
    }


} exports.default = Aluno;
