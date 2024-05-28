# MBA_BackendDev_PizzariaMPL

Entrega da atividade final da disciplina de Back-End Development para o MBA em Desenvolvimento Full Stack

Para trabalhar neste projeto:

1. Abrir o projeto no Visual Studio Code
2. Usando o terminal, executar os seguintes comandos.

para inicializar o projeto

npm init -y

para instalar as dependências (rodar uma linha por dependência)

npm i express
npm i -D nodemon
npm i bcrypt
npm i dotenv
npm i jsonwebtoken
npm i mongoose
npm i swagger-ui-express

3. no package.json/"scripts" incluir:

"start": "node ./index.js",
"dev": "nodemon ./index.js"

4. modificar um arquivo .env com estas variáveis:

URLDATABASE = "[url do banco de dados MongoDB]"
SECRET = "[string qualquer para ser usado como segredo na geração de criptografia]"

5. para rodar o script principal

npm start

6. para rodar o script via nodemon

npm run dev
