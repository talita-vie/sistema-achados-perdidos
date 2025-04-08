import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export default function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(404).json({ error: 'Token não encontrado' });
  }

  jwt.verify(token, SECRET, (err, usuario) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.usuario = usuario;
    next();
  });
}

