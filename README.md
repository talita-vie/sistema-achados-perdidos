#   Sistema de Achados e Perdidos Comunitário 📍

    Criação de uma API Back-End para um sistema que permite 
    o cadastro e consulta de itens perdidos e encontrados em uma cidade ou comunidade, 
    facilitando a devolução de objetos para os seus donos.

##  1. Tecnologias Utilizadas

    Node.js com Express
    Prisma ORM
    PostgreSQL
    JavaScript

##  2. Instalação do projeto na sua máquina

    Clone o repositório:

    \`\`\`bash
    git clone https://github.com/talita-vie/sistema-achados-perdidos.git
    cd sistema-achados-perdidos
    \`\`\`

    Instale as dependências:

    \`\`\`bash
    npm install
    \`\`\`

    Configure o arquivo `.env` com suas credenciais de banco de dados:

    \`\`\`
    DATABASE_URL="postgresql://username:password@localhost:5432/achados_perdidos?schema=public"
    PORT=3000
    \`\`\`

    Execute as migrações do banco de dados:

    \`\`\`bash
    npx prisma migrate dev --name init
    \`\`\`

    Inicie o servidor:

    \`\`\`bash
    # Modo desenvolvimento
    npm run dev

    # Modo produção
    npm start
    \`\`\`

##  3. Estrutura do Projeto

    \`\`\`
    achados-perdidos/
    ├── prisma/
    │   └── schema.prisma       # Definição do esquema do banco de dados
    ├── src/
    │   ├── controllers/        # Controladores das rotas
    │   ├── routes/             # Definição das rotas
    │   ├── middlewares/        # Middlewares da aplicação
    │   ├── utils/              # Funções utilitárias
    │   └── app.js             # Configuração do Express
    ├── .env                    # Variáveis de ambiente
    ├── package.json
    └── server.js              # Ponto de entrada da aplicação
    \`\`\`

##   4. Visão Geral da API

    A API do Sistema de Achados e Perdidos Comunitário permite:

    -   Cadastrar novos itens perdidos ou encontrados.
    -   Buscar itens por diversos critérios (categoria, status, palavras-chave).
    -   Visualizar detalhes de um item específico.
    -   Editar informações de itens existentes.
    -   Excluir itens.

    Cada item é associado a atributos como:

    -   Descrição do objeto
    -   Características físicas
    -   Local em que foi perdido/encontrado
    -   Código único para identificação

    [Documentação completa da API:](https://github.com/talita-vie/sistema-achados-perdidos/blob/master/readme-achados-perdidos.md)

##   Desenvolvimento futuro do projeto

    Será desenvolvida a interface Front-End com JavaScript e React, 
    configurando a aplicação completa do Sistema de Achados e Perdidos Comunitário.

##   Contribuição

    Para contribuir com este projeto:

    1.  Fork o repositório
    2.  Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)
    3.  Faça commit das suas alterações (git commit -m 'Adiciona nova funcionalidade')
    4.  Push para a branch (git push origin feature/nova-funcionalidade)
    5.  Abra um Pull Request

##   Licença

    Este projeto está licenciado sob a licença MIT.
