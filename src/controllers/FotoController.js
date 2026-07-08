import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

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
                const foto = await Foto.create({ originalname, filename, aluno_id });

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

export default new FotoController();
