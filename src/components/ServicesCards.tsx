"use client";

import { useState } from "react";

const servidores = [
  { id: 1, nome: "João Silva", cargo: "Pedreiro", telefone: 889763465, preco: 100 },
  { id: 2, nome: "Maria Oliveira", cargo: "Desenvolvedor", telefone: 889763465, preco: 100 },
  { id: 3, nome: "Carlos Santos", cargo: "Analista", telefone: 889763465, preco: 100 },
  { id: 4, nome: "Ana Costa", cargo: "Desenvolvedor", telefone: 889763465, preco: 100 },
  { id: 5, nome: "Pedro Lima", cargo: "Designer", telefone: 889763465, preco: 100 },
  { id: 6, nome: "João Silva", cargo: "Pedreiro", telefone: 889763465, preco: 100 },
  { id: 7, nome: "Maria Oliveira", cargo: "Desenvolvedor", telefone: 889763465, preco: 100 },
  { id: 8, nome: "Carlos Santos", cargo: "Analista", telefone: 889763465, preco: 100 },
  { id: 9, nome: "Ana Costa", cargo: "Desenvolvedor", telefone: 889763465, preco: 100 },
  { id: 10, nome: "Pedro Lima", cargo: "Designer", telefone: 889763465, preco: 100 },
];

const ServidoresPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServidor, setSelectedServidor] = useState(null);
  const [formData, setFormData] = useState({ nome: "", email: "" });

  // Filtrar servidores com base no cargo pesquisado
  const filteredServidores = servidores.filter((servidor) =>
    servidor.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (servidor) => {
    setSelectedServidor(servidor);
  };

  const handleCloseModal = () => {
    setSelectedServidor(null);
    setFormData({ nome: "", email: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      servidor: selectedServidor,
      cliente: formData,
    };
    console.log("Dados enviados:", data);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Servidores</h1>

      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar pelo cargo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredServidores.map((servidor) => (
          <div
            key={servidor.id}
            className="bg-white shadow-md rounded-lg gap-5 p-4 border border-gray-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-bold text-gray-800">{servidor.nome}</h2>
            <p className="text-gray-600">Cargo: {servidor.cargo}</p>
            <p className="text-gray-600">Telefone: {servidor.telefone}</p>
            <p className="text-gray-600">R$ {servidor.preco},00/Day</p>
            <button
              onClick={() => handleOpenModal(servidor)}
              className="w-full h-10 rounded-3xl font-bold bg-yellow-400 flex items-center justify-center"
            >
              Contratar serviço
            </button>
          </div>
        ))}
      </div>

      {filteredServidores.length === 0 && (
        <p className="text-gray-500 mt-6">Nenhum servidor encontrado com esse cargo.</p>
      )}

      {selectedServidor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Contratar {selectedServidor.nome}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="nome">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full mt-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServidoresPage;
