import { useState } from "react";
import { criarItem } from "../services/itemService";

import background from "../assets/itensbg.jpg";

export default function RegisterItem() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [foto, setFoto] = useState(null); // Mudando de 'ficheiro' para 'foto'

  const handleCadastro = async () => {
    console.log("Função handleCadastro chamada"); 
    try {
      const formData = new FormData();
      formData.append("nome", titulo);
      formData.append("descricao", descricao);
      formData.append("localizacao", local);
      console.log("FormData criado:", formData);

      if (foto) {
        const fileType = foto.type;
        if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
          alert('Somente imagens JPG ou PNG são permitidas');
          return;
        }
        formData.append("foto", foto);
      }
      console.log("Arquivo de foto anexado:", foto);

      console.log("Enviando formData para criarItem...");
  
      const response = await criarItem(formData);

      console.log("Resposta do servidor:", response);

      if (response.status === 201) {
        alert("Item cadastrado com sucesso!");
      } else {
        throw new Error('Erro ao cadastrar item');
      }
  
      setTitulo("");
      setDescricao("");
      setLocal("");
      setFoto(null);
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar item: " + error.message);
    }
  };
  
  

  return (
    <div
      className="min-h-screen flex items-center justify-start bg-cover bg-center pl-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          CADASTRAR ITEM
        </h1>

        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Título do item"
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Descrição detalhada"
          rows={4}
        />
        <input
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Local onde foi encontrado"
        />
        <input
          type="file"
          onChange={(e) => setFoto(e.target.files[0])} // Mudando para 'foto'
          className="w-full p-3 rounded-md bg-gray-100 text-gray-500 mb-4"
        />

        <button 
          onClick={handleCadastro}
          className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 w-full"
        >
          Cadastrar item
        </button>
      </div>
    </div>
  );
}
