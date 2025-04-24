import background from "../assets/bg.jpg";

export default function Register() {
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
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="joanasilva@gmail.com"
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="+55 (11) 9 9999-9999"
        />

        <div className="flex gap-2 mb-4">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
            placeholder="Senha"
            type="password"
          />
          <input
            className="block w-full mb-3 p-3 rounded-xl bg-gray-100"
            placeholder="Confirme sua senha"
            type="password"
          />
        </div>

        <button className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 w-full">
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
