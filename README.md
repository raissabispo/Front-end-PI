
# 🦷 Plataforma de Gestão de Laudos Periciais Odontológicos

Este projeto consiste em uma **plataforma web** desenvolvida como parte do Projeto Integrador, com o objetivo de **centralizar o processo de gestão de laudos periciais odontológicos**. A solução permite que peritos e profissionais da área:

- Cadastrem casos;
- Anexem evidências;
- Gerem laudos automáticos em PDF;
- Acompanhem investigações de forma **segura, rápida e eficiente**.

Além da versão web, o projeto também contará com um **aplicativo mobile** para facilitar a **coleta de dados em campo**.

---

## 🚀 Funcionalidades

- ✅ Cadastro estruturado de **casos periciais**, com dados detalhados (local, hora, tipo de ocorrência)
- 📎 Upload de **evidências (imagens e arquivos)**
- 📄 Geração de **laudos em PDF**, com revisão e **assinatura digital**
- 👥 Perfis de acesso personalizados:
  - Perito
  - Assistente
  - Administrador
- 📊 Painel de controle para administradores com visão geral de **usuários e casos**
- ⏱️ Acompanhamento em **tempo real** do andamento dos casos (status)

---

## 🛠️ Tecnologias Utilizadas

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) – autenticação
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) – hash de senhas
- [Dotenv](https://www.npmjs.com/package/dotenv) – variáveis de ambiente
- [Cors](https://www.npmjs.com/package/cors) – controle de acesso
- [Multer](https://www.npmjs.com/package/multer) – upload de imagens
- [Axios](https://axios-http.com/) – requisições HTTP
- [Nominatim API](https://nominatim.org/release-docs/latest/api/Search/) – geocodificação de localização

### Frontend

- HTML5
- CSS3
- JavaScript (consumindo a API com Axios)

---

## 🧪 Como Rodar o Projeto Localmente

> Certifique-se de ter o **Node.js** e o **MongoDB** instalados na sua máquina.

1. Clone o repositório:
```bash
git clone https://github.com/raissabispo/Front-end-PI.git
```

2. Acesse a pasta do projeto:
```bash
cd Front-end-PI
```

3. Instale as dependências:
```bash
npm install
```

4. Configure o arquivo `.env` com as variáveis de ambiente necessárias:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Inicie o servidor:
```bash
npm start
```

6. Para testar o front-end, abra o `index.html` em seu navegador ou utilize uma extensão como o **Live Server**.

---


