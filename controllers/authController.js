const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

//criar novo usuário
exports.register = async (req, res) => {
    
    const { nome, email, telefone, senha } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const usuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                telefone,
                senha: hashedPassword
            }
        });
        res.status(201).json({ message: 'Usuário criado com sucesso', usuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }

};

//fazer login
exports.login = async (req, res) => {
    
    const { email, senha } = req.body;

    try {
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if(!usuario){
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if(!senhaCorreta){
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            SECRET,
            { expiresIn: '5h' }
        );

        res.status(201).json({ message: 'Login realizado com sucesso!', token });

    } catch (error) {
        
        console.error(500).json({ error: 'Erro no login' });

    }

};