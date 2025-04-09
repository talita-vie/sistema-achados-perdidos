import express from 'express';
import autenticarToken from '../middleware/authMiddleware.js';
import { ItemController } from '../controllers/itemController.js';

const router = express.Router();
const itemController = new ItemController();

// Público
router.get('/', itemController.listarTodos);

// Protegidas
router.post('/', autenticarToken, itemController.criarItem);
router.put('/:id', autenticarToken, itemController.atualizarItem);
router.delete('/:id', autenticarToken, itemController.deletarItem);

export default router;
