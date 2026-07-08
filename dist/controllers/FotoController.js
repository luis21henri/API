"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

class FotoController {
    store(req, res) {
        return upload(req, res, async (error) => {
            if (error) {
                return res.status(400).json({ errors: [error.message] });
            }

            try {
                const { originalname, filename } = req.file;
                const { aluno_id } = req.body; // Pega o ID do corpo da requisição

                // Importante: cria incluindo o aluno_id
                const foto = await _Foto2.default.create({ originalname, filename, aluno_id });

                return res.json(foto);
            } catch (e) {
                console.log(e); // O erro real vai aparecer aqui no seu terminal
                return res.status(400).json({
                    errors: ['Erro ao salvar foto. Verifique se o aluno_id existe.'],
                });
            }
        });
    }
}

exports. default = new FotoController();
