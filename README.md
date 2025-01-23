# Handyman

Bem-vindo ao **Handyman**! Este é um projeto que busca conectar profissionais autônomos com clientes em busca de serviços especializados. A plataforma permite que profissionais se cadastrem, exibam suas habilidades e que clientes encontrem os profissionais ideais para suas necessidades.

---

## 🚀 Sobre o Projeto

O Handyman é uma plataforma desenvolvida com **React**, **Next.js** e **Tailwind CSS**, visando oferecer uma interface moderna, responsiva e de fácil utilização para ambas as partes: profissionais autônomos e clientes. A plataforma é estruturada para:

- **Profissionais**:
  - Cadastro de suas informações pessoais e serviços oferecidos.
  - Gerenciamento de seu perfil e visibilidade para clientes.

- **Clientes**:
  - Busca de profissionais por categoria ou especialidade.
  - Visualização de perfis detalhados de profissionais disponíveis.

Com o Handyman, queremos tornar mais fácil a interação entre quem presta serviços e quem precisa deles.

---

## 🗂 Estrutura de Pastas

Abaixo está um resumo da estrutura de pastas do projeto para facilitar a compreensão:

```plaintext
Handyman/
├── public/                # Arquivos públicos, como imagens e ícones.
├── src/
│   ├── components/        # Componentes reutilizáveis da interface.
│   ├── pages/             # Páginas principais da aplicação (Next.js).
│   │   ├── index.js       # Página inicial.
│   │   ├── cadastro.js    # Página de cadastro de profissionais.
│   │   ├── busca.js       # Página de busca de profissionais.
│   ├── styles/            # Estilos globais e configurações do Tailwind CSS.
│   ├── utils/             # Funções utilitárias e helpers.
│   └── services/          # Serviços de API e integração de dados.
├── .env.local             # Arquivo de configuração de variáveis de ambiente.
├── package.json           # Dependências e scripts do projeto.
├── README.md              # Documentação do projeto.
└── next.config.js         # Configurações do Next.js.
```

---

## 🛠 Tecnologias Utilizadas

- **React**: Para a construção de interfaces dinâmicas e reativas.
- **Next.js**: Para renderização no lado do servidor e geração de páginas estáticas.
- **Tailwind CSS**: Para estilização rápida e responsiva.

---

## ⚙️ Como Configurar e Rodar o Projeto

Siga os passos abaixo para baixar e executar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de que você tenha instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/handyman.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd handyman
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias (exemplo abaixo):

   ```env
   NEXT_PUBLIC_API_URL=https://sua-api-endpoint.com
   ```

5. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

6. **Abra no navegador**:

   Acesse o projeto em [http://localhost:3000](http://localhost:3000).

---

## 📚 Tutorial para Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m "Adicionei uma nova feature"
   ```

4. Faça o push para sua branch:

   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ pela equipe Handyman.**
