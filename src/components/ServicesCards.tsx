"use client"

import { useState } from "react";

const servidores = [
  { id: 1, nome: "João Silva", cargo: "Pedreiro", telefone: 889763465 },
  { id: 2, nome: "Maria Oliveira", cargo: "Desenvolvedor", telefone: 889763465 },
  { id: 3, nome: "Carlos Santos", cargo: "Analista", telefone: 889763465 },
  { id: 4, nome: "Ana Costa", cargo: "Desenvolvedor", telefone: 889763465 },
  { id: 5, nome: "Pedro Lima", cargo: "Designer", telefone: 889763465 },
  { id: 6, nome: "João Silva", cargo: "Pedreiro", telefone: 889763465 },
  { id: 7, nome: "Maria Oliveira", cargo: "Desenvolvedor", telefone: 889763465 },
  { id: 8, nome: "Carlos Santos", cargo: "Analista", telefone: 889763465 },
  { id: 9, nome: "Ana Costa", cargo: "Desenvolvedor", telefone: 889763465 },
  { id: 10, nome: "Pedro Lima", cargo: "Designer", telefone: 889763465 },
];

const ServidoresPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar servidores com base no cargo pesquisado
  const filteredServidores = servidores.filter((servidor) =>
    servidor.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-bold text-gray-800">{servidor.nome}</h2>
            <p className="text-gray-600">Cargo: {servidor.cargo}</p>
            <p className="text-gray-600">Telefone: {servidor.telefone}</p>
          </div>
        ))}
      </div>

      {filteredServidores.length === 0 && (
        <p className="text-gray-500 mt-6">Nenhum servidor encontrado com esse cargo.</p>
      )}
    </div>
  );
};

export default ServidoresPage;
