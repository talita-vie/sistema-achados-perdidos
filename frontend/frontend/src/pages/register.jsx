import { useState } from "react";
import background from "../assets/bg.jpg";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, telefone, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        // redirecionar se quiser, ex: window.location.href = "/login";
      } else {
        alert(data.erro || "Erro ao criar conta");
      }
    } catch (error) {
      alert("Erro na requisição: " + error.message);
    }
  }

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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Joana Silva"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="joanasilva@gmail.com"
        />

        <input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="+55 (11) 9 9999-9999"
        />

        <div className="flex gap-2 mb-4">
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
            placeholder="Senha"
            type="password"
          />
          <input
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="block w-full mb-3 p-3 rounded-xl bg-gray-100"
            placeholder="Confirme sua senha"
            type="password"
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
          <a href="#" className="text-blue-800 font-semibold hover:underline">
            fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
