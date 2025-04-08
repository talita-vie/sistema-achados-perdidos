const express = require('express');
const router = express.Router();
const autenticarToken = require('../middleware/authMiddleware.js');


//rota protegida para teste
router.get('/protected', autenticarToken, (req, res) => {

    res.json({ message: 'acesso à rota protegida realizado com sucesso', usuario: req.usuario });

});

module.exports = router;
