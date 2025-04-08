import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import userRoutes from './src/routes/userRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import protectedRoutes from './src/routes/protectedRoutes.js';
import categoryRoutes from "./src/routes/categoryRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Rotas

app.use('/api/usuarios', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/categorias', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
