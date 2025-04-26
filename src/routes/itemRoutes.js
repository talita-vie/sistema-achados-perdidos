import express from 'express';
import autenticarToken from '../middleware/authMiddleware.js';
import { ItemController } from '../controllers/itemController.js';
import multer from 'multer';

const router = express.Router();
const itemController = new ItemController();

const upload = multer({ dest: 'uploads/' });

// Público
router.get('/', itemController.listarTodos);

// Protegidas
router.post('/', autenticarToken, upload.single('foto'), (req, res, next) => {
  console.log("Corpo da requisição (req.body):", req.body); // Verifique os dados do formulário
  console.log("Arquivo recebido (req.file):", req.file); // Verifique se o arquivo foi enviado corretamente

  // Passa para o controlador após o log
  next();
}, itemController.criarItem);
router.put('/:id', autenticarToken, itemController.atualizarItem);
router.delete('/:id', autenticarToken, itemController.deletarItem);

export default router;
