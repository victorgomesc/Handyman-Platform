"use client";

import { useState } from "react";

const CadastroForm = () => {
  const [formType, setFormType] = useState("servidor"); // Define qual formulário exibir
  const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // Para armazenar a URL da imagem após upload

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Servidores"); // Substitua pelo seu upload preset
    data.append("cloud_name", "dutpev6fe"); // Substitua pelo seu nome no Cloudinary

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dutpev6fe/image/upload", {
        method: "POST",
        body: data,
      });

      const response = await res.json();
      if (response.url) {
        setUploadedImageUrl(response.url); // Atualiza o estado com a URL da imagem
        alert("Imagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar imagem. Verifique os dados configurados.");
      }
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      alert("Erro ao enviar imagem. Tente novamente.");
    }
  };

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
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="telefone">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu telefone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="telefone">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o seu telefone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Valor do serviço prestado:
            </label>
            <input
              type="text"
              id="price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="R$ 100,00/Dia"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Sua senha deve ter 6 dígitos"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="proficao">Profissão</label>
            <select 
              id="proficao"  
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>Eletricista</option>
              <option>Pedreiro</option>
              <option>Encanador</option>
              <option>Diarista</option>
            </select>
          </div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="proficao">Escolha uma imagem para seu perfil</label>
          <input 
            type="file" 
            onChange={handleFileUpload}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
          />
          {uploadedImageUrl && (
            <div className="mt-4">
              <p className="text-gray-700">Imagem enviada com sucesso!</p>
              <a 
                href={uploadedImageUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline"
              >
                Visualizar imagem
              </a>
            </div>
          )}
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
