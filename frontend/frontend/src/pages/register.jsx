import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

import background from "../assets/bg.jpg";

export default function Register() {

  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const result = await register(nome, email, telefone, password);
      console.log("Conta criada com sucesso!", result);

      navigate("/login");
    }catch (error) {
      console.error("Error ao cadastrar usuario", error.response?.data || error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl w-full max-w-md text-center">
        <img
          src="../assets/logo.png"
          alt="Achado Solidário"
          className="mx-auto w-24 mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          CRIE SUA CONTA
        </h1>

        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Joana Silva"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="joanasilva@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="+55 (11) 9 9999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <div className="flex gap-2 mb-4">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="block w-full mb-3 p-3 rounded-xl bg-gray-100"
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
        onClick={handleRegister}
         className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 w-full"
        >
          Criar conta
        </button>

        <p className="mt-4 text-gray-700">
          ou{" "}
          <a href="/login" className="text-blue-800 font-semibold hover:underline">
            fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
