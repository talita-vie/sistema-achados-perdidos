import background from "../assets/itensbg.jpg";

export default function RegisterItem() {
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
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Título do item"
        />
        <textarea
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Descrição detalhada"
          rows={4}
        />
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Local onde foi encontrado"
        />
        <input
          type="file"
          className="w-full p-3 rounded-md bg-gray-100 text-gray-500 mb-4"
        />

        <button className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 w-full">
          Cadastrar item
        </button>
      </div>
    </div>
  );
}
