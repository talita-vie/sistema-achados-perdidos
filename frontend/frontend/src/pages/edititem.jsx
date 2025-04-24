import background from "../assets/bgedit.jpg";

export default function EditItem() {
  return (
    <div
      className="min-h-screen flex items-center justify-start bg-cover bg-center pl-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          EDITAR OU REMOVER ITEM
        </h1>

        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-6"
          placeholder="Digite o código único"
        />

        {/* Formulário que aparece após validação */}
        <input
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Novo título do item"
        />
        <textarea
          className="w-full p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none transition mb-4"
          placeholder="Nova descrição"
          rows={4}
        />

        <div className="flex gap-2">
          <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full hover:bg-orange-600 w-full">
            Atualizar
          </button>
          <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-full hover:bg-red-600 w-full">
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
