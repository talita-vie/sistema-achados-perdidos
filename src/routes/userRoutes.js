import express from 'express';
import { UserController } from '../controllers/userController.js';
import  autenticarToken  from '../middleware/authMiddleware.js';

const router = express.Router();
const userController = new UserController();

router.post('/usuarios', userController.createUser);
router.use(autenticarToken);

router.get('/', userController.searchUser); 
router.get('/:id', userController.searchUserForId); 
router.put('/:id', userController.updateUser); 
router.delete('/:id', userController.deleteUser); 

export default router;