import background from "../assets/bg.jpg";

export default function MyItems() {
  const meusItens = [
    {
      id: "abc123",
      nome: "Mochila vermelha",
      status: "Pendente",
      data: "21/04/2025",
    },
    {
      id: "def456",
      nome: "Chave com chaveiro azul",
      status: "Devolvido",
      data: "18/04/2025",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1437] p-6">
      >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl w-full max-w-3xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Meus Itens
        </h1>

        <div className="grid gap-4">
          {meusItens.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-gray-100 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.nome}
                </h2>
                <p className="text-sm text-gray-600">
                  Código: <span className="font-mono">{item.id}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Data: {item.data} —{" "}
                  <span
                    className={`font-semibold ${
                      item.status === "Pendente"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>

              <a
                href={`/edit/${item.id}`}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-sm"
              >
                Editar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
