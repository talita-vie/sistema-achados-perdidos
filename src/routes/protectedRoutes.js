import { Router } from 'express';
import autenticarToken from '../middleware/authMiddleware.js';

const router = Router();

// Rota protegida para teste
router.get('/protected', autenticarToken, (req, res) => {
  res.json({ message: 'Acesso à rota protegida realizado com sucesso', usuario: req.usuario });
});

export default router;
