import background from "../assets/bghome.jpg";
import logo from "../assets/logo.png";
import { LogOut } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#0B1437] text-white w-60 flex flex-col justify-between p-6 rounded-r-3xl">
        <div>
          <p className="text-lg mb-8">Olá, Joana!</p>
          <a
            href="/meus-itens"
            className="block text-md hover:underline transition"
          >
            Seus itens
          </a>
        </div>

        <a
          href="/login"
          className="flex items-center gap-2 text-white hover:underline transition"
        >
          <LogOut size={20} />
          Sair
        </a>
      </aside>

      {/* Main */}
      <main
        className="flex-1 flex items-center justify-center bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-center bg-white bg-opacity-70 p-10 rounded-3xl shadow-md max-w-xl w-full">
          <img
            src={logo}
            alt="Achado Solidário"
            className="w-32 mx-auto mb-6"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Perdeu algo?
          </h2>
          <p className="text-gray-800 mb-8">
            Deixe que alguém encontre pra você!
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/items"
              className="bg-[#E6681D] text-white font-bold px-6 py-4 rounded-2xl w-48 text-lg hover:bg-orange-600 transition"
            >
              Ver itens achados
            </a>
            <a
              href="/register-item"
              className="bg-[#0B1437] text-white font-bold px-6 py-4 rounded-2xl w-48 text-lg hover:bg-[#1c2b61] transition"
            >
              Cadastrar item
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
