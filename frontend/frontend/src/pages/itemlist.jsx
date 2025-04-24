import background from "../assets/bg.jpg";

export default function ItemList() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-2xl max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Itens Encontrados
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            className="flex-1 p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none"
            placeholder="Pesquisar por nome ou local..."
          />
          <select className="p-3 rounded-md bg-gray-100 border border-transparent focus:border-[#E6681D] hover:border-[#E6681D] outline-none">
            <option>Todos os locais</option>
            <option>Biblioteca</option>
            <option>Auditório</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Exemplo de item */}
          <div className="p-4 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-lg">Chave com chaveiro azul</h2>
            <p className="text-gray-700 text-sm mb-2">Encontrado na sala 204</p>
            <button className="text-sm text-orange-600 font-semibold hover:underline">
              Ver mais
            </button>
          </div>
          {/* Repetir para outros itens */}
        </div>
      </div>
    </div>
  );
}
