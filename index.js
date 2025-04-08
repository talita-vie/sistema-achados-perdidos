const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/authRoutes.js');
const protectedRoutes = require('./routes/protectedRoutes.js');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

//rotas de registro e login
app.use('/auth', authRoutes);

//rota protegida de teste
app.use('/user', protectedRoutes);

// Rota teste
app.get('/', (req, res) => {
  res.send('API Achados e Perdidos está no ar!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
