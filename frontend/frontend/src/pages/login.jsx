import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

import background from "../assets/bg.jpg";
import image from "../assets/logo.png";

export default function Login() {
  const navigate  = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      console.log("Login realizado com sucesso!", result);
      
      localStorage.setItem("token", result.token);

      navigate("/inicio");
    } catch(error) {
      console.error("Erro ao fazer login", error.response?.data || error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl w-full max-w-md text-center">
        <img src={image} alt="Achado Solidário" className="mx-auto w-24 mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Acesse sua Conta
        </h1>
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="joanasilva@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-2 mb-4"></div>

        <button
          onClick={handleLogin} 
          className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 w-full"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
