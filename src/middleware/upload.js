import multer from "multer";
import path from "path";

// Configuração do multer para fazer upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Aqui, os arquivos serão salvos na pasta 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Usando a data atual para gerar um nome único
  },
});

const upload = multer({ storage }).single('foto'); // Usa o 'storage' definido anteriormente

export default upload;
