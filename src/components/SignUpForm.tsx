"use client"

import { useState } from "react";

const CadastroForm = () => {
  const [formType, setFormType] = useState(null); // Define qual formulário exibir

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro</h1>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold text-white ${
            formType === "cliente" ? "bg-blue-500" : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => setFormType("cliente")}
        >
          Cliente
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold text-white ${
            formType === "servidor" ? "bg-green-500" : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => setFormType("servidor")}
        >
          Servidor
        </button>
      </div>

      {formType === "cliente" && (
        <form className="w-full max-w-md bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Formulário de Cliente</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="nome">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      )}

      {formType === "servidor" && (
        <form className="w-full max-w-md bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Formulário de Servidor</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="nome">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="departamento">
              Departamento
            </label>
            <input
              type="text"
              id="departamento"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o departamento"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default CadastroForm;
