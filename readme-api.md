## Documentação da API do Sistema de Achados e Perdidos Comunitário

### Categorias

#### Listar todas as categorias

- **Método**: `GET`
- **Endpoint**: `/api/categorias`
- **Descrição**: Retorna a lista de todas as categorias disponíveis.

**Exemplo de Resposta**:

```json
[
  {
    "id": 1,
    "nome": "Eletrônicos"
  },
  {
    "id": 2,
    "nome": "Documentos"
  }
]
```

#### Obter categoria por ID

- **Método**: `GET`
- **Endpoint**: `/api/categorias/:id`
- **Descrição**: Retorna os detalhes de uma categoria específica.

**Exemplo de Requisição**:

```
GET /api/categorias/1
```

**Exemplo de Resposta**:

```json
{
  "id": 1,
  "nome": "Eletrônicos"
}
```

#### Criar nova categoria

- **Método**: `POST`
- **Endpoint**: `/api/categorias`
- **Descrição**: Cria uma nova categoria.

**Parâmetros do Corpo (Body)**:
| Parâmetro | Tipo | Descrição | Obrigatório |
|-----------|--------|--------------------|-------------|
| nome | String | Nome da categoria | Sim |

**Exemplo de Requisição**:

```json
{
  "nome": "Vestuário"
}
```

**Exemplo de Resposta (201 Created)**:

```json
{
  "id": 3,
  "nome": "Vestuário"
}
```

#### Atualizar categoria

- **Método**: `PUT`
- **Endpoint**: `/api/categorias/:id`
- **Descrição**: Atualiza uma categoria existente.

**Exemplo de Requisição**:

```json
{
  "nome": "Roupas e Vestuário"
}
```

**Exemplo de Resposta**:

```json
{
  "id": 3,
  "nome": "Roupas e Vestuário"
}
```

#### Excluir categoria

- **Método**: `DELETE`
- **Endpoint**: `/api/categorias/:id`
- **Descrição**: Remove uma categoria. Não é possível excluir categorias que estão sendo usadas por itens.

**Exemplo de Requisição**:

```
DELETE /api/categorias/3
```

**Exemplo de Resposta (204 No Content)**:

```
(Sem corpo de resposta)
```

### Itens

#### Listar todos os itens

- **Método**: `GET`
- **Endpoint**: `/api/itens`
- **Descrição**: Retorna a lista de todos os itens perdidos e encontrados.

**Parâmetros de Consulta (Query)**:
| Parâmetro | Tipo | Descrição | Obrigatório |
|-------------|--------|------------------------------------------------|-------------|
| categoria | Number | Filtra por ID da categoria | Não |
| status | String | Filtra por status (PERDIDO ou ENCONTRADO) | Não |
| localizacao | String | Filtra por localização (busca parcial) | Não |
| search | String | Busca por palavra-chave no nome ou descrição | Não |

**Exemplo de Requisição**:

```
GET /api/itens?status=PERDIDO&search=celular
```

**Exemplo de Resposta**:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nome": "Smartphone Samsung Galaxy",
    "descricao": "Celular com capa vermelha e tela trincada",
    "data": "2025-04-08T00:00:00.000Z",
    "localizacao": "Praça Central",
    "status": "PERDIDO",
    "foto": null,
    "codigo": "a1b2c3d4",
    "createdAt": "2025-04-09T15:30:45.123Z",
    "updatedAt": "2025-04-09T15:30:45.123Z",
    "categoriaId": 1,
    "usuarioId": 1,
    "categoria": {
      "id": 1,
      "nome": "Eletrônicos"
    },
    "usuario": {
      "nome": "João Silva",
      "telefone": "99999-9999",
      "email": "joao@exemplo.com"
    }
  }
]
```

#### Obter item por ID

- **Método**: `GET`
- **Endpoint**: `/api/itens/:id`
- **Descrição**: Retorna os detalhes de um item específico.

**Exemplo de Requisição**:

```
GET /api/itens/550e8400-e29b-41d4-a716-446655440000
```

**Exemplo de Resposta**:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "nome": "Smartphone Samsung Galaxy",
  "descricao": "Celular com capa vermelha e tela trincada",
  "data": "2025-04-08T00:00:00.000Z",
  "localizacao": "Praça Central",
  "status": "PERDIDO",
  "foto": null,
  "codigo": "a1b2c3d4",
  "createdAt": "2025-04-09T15:30:45.123Z",
  "updatedAt": "2025-04-09T15:30:45.123Z",
  "categoriaId": 1,
  "usuarioId": 1,
  "categoria": {
    "id": 1,
    "nome": "Eletrônicos"
  },
  "usuario": {
    "nome": "João Silva",
    "telefone": "99999-9999",
    "email": "joao@exemplo.com"
  }
}
```

#### Criar novo item

- **Método**: `POST`
- **Endpoint**: `/api/itens`
- **Descrição**: Cadastra um novo item perdido ou encontrado.

**Parâmetros do Corpo (Body)**:
| Parâmetro | Tipo | Descrição | Obrigatório |
|----------------|--------|------------------------------------------------|-------------|
| nome | String | Nome/descrição curta do item | Sim |
| descricao | String | Descrição detalhada do item | Não |
| data | String | Data quando foi perdido/encontrado (YYYY-MM-DD)| Sim |
| localizacao | String | Local onde foi perdido/encontrado | Sim |
| status | String | Status do item (PERDIDO ou ENCONTRADO) | Sim |
| foto | String | URL ou base64 da imagem do item | Não |
| categoriaId | Number | ID da categoria do item | Sim |
| usuarioNome | String | Nome da pessoa que cadastrou | Sim |
| usuarioTelefone| String | Telefone de contato | Não |
| usuarioEmail | String | Email de contato | Sim |

**Exemplo de Requisição**:

```json
{
  "nome": "Carteira Preta",
  "descricao": "Carteira de couro com documentos",
  "data": "2025-04-07",
  "localizacao": "Shopping Center",
  "status": "ENCONTRADO",
  "categoriaId": 2,
  "usuarioNome": "Maria Souza",
  "usuarioTelefone": "99999-9999",
  "usuarioEmail": "maria@exemplo.com"
}
```

**Exemplo de Resposta (201 Created)**:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "nome": "Carteira Preta",
  "descricao": "Carteira de couro com documentos",
  "data": "2025-04-07T00:00:00.000Z",
  "localizacao": "Shopping Center",
  "status": "ENCONTRADO",
  "foto": null,
  "codigo": "e5f6g7h8",
  "createdAt": "2025-04-09T16:15:30.456Z",
  "updatedAt": "2025-04-09T16:15:30.456Z",
  "categoriaId": 2,
  "usuarioId": 2,
  "categoria": {
    "id": 2,
    "nome": "Documentos"
  },
  "usuario": {
    "nome": "Maria Souza",
    "telefone": "88888-8888",
    "email": "maria@exemplo.com"
  },
  "codigo": "e5f6g7h8"
}
```

#### Obter item por código único

- **Método**: `GET`
- **Endpoint**: `/api/itens/codigo/:codigo`
- **Descrição**: Retorna os detalhes de um item pelo código único.

**Exemplo de Requisição**:

```
GET /api/itens/codigo/e5f6g7h8
```

**Exemplo de Resposta**:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "nome": "Carteira Preta",
  "descricao": "Carteira de couro com documentos",
  "data": "2025-04-07T00:00:00.000Z",
  "localizacao": "Shopping Center",
  "status": "ENCONTRADO",
  "foto": null,
  "codigo": "e5f6g7h8",
  "createdAt": "2025-04-09T16:15:30.456Z",
  "updatedAt": "2025-04-09T16:15:30.456Z",
  "categoriaId": 2,
  "usuarioId": 2,
  "categoria": {
    "id": 2,
    "nome": "Documentos"
  },
  "usuario": {
    "nome": "Maria Souza",
    "telefone": "88888-8888",
    "email": "maria@exemplo.com"
  }
}
```

#### Atualizar item usando código único

- **Método**: `PUT`
- **Endpoint**: `/api/itens/codigo/:codigo`
- **Descrição**: Atualiza as informações de um item usando o código único.

**Parâmetros do Corpo (Body)**:
| Parâmetro | Tipo | Descrição | Obrigatório |
|----------------|--------|------------------------------------------------|-------------|
| nome | String | Nome/descrição curta do item | Não |
| descricao | String | Descrição detalhada do item | Não |
| data | String | Data quando foi perdido/encontrado (YYYY-MM-DD)| Não |
| localizacao | String | Local onde foi perdido/encontrado | Não |
| status | String | Status do item (PERDIDO ou ENCONTRADO) | Não |
| foto | String | URL ou base64 da imagem do item | Não |
| categoriaId | Number | ID da categoria do item | Não |

**Exemplo de Requisição**:

```json
{
  "descricao": "Carteira preta de couro com documentos e cartões de crédito",
  "status": "ENCONTRADO"
}
```

**Exemplo de Resposta**:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "nome": "Carteira Preta",
  "descricao": "Carteira preta de couro com documentos e cartões de crédito",
  "data": "2025-04-07T00:00:00.000Z",
  "localizacao": "Shopping Center",
  "status": "ENCONTRADO",
  "foto": null,
  "codigo": "e5f6g7h8",
  "createdAt": "2025-04-09T16:15:30.456Z",
  "updatedAt": "2025-04-09T16:30:45.789Z",
  "categoriaId": 2,
  "usuarioId": 2,
  "categoria": {
    "id": 2,
    "nome": "Documentos"
  },
  "usuario": {
    "nome": "Maria Souza",
    "telefone": "88888-8888",
    "email": "maria@exemplo.com"
  }
}
```

#### Excluir item usando código único

- **Método**: `DELETE`
- **Endpoint**: `/api/itens/codigo/:codigo`
- **Descrição**: Remove um item do sistema usando seu código único.

**Exemplo de Requisição**:

```
DELETE /api/itens/codigo/e5f6g7h8
```

**Exemplo de Resposta (204 No Content)**:

```
(Sem corpo de resposta)
```

## Como Testar a API

Para testar a API, você pode usar ferramentas como Postman, Insomnia ou Thunder Client (extensão do VS Code).

1. Primeiro, crie algumas categorias:

   ```
   POST /api/categorias
   Body: { "nome": "Eletrônicos" }
   ```

2. Crie um item perdido ou encontrado:

   ```
   POST /api/itens
   Body: {
     "nome": "Smartphone Samsung Galaxy",
     "descricao": "Celular com capa vermelha",
     "data": "2025-04-08",
     "localizacao": "Praça Central",
     "status": "PERDIDO",
     "categoriaId": 1,
     "usuarioNome": "João Silva",
     "usuarioTelefone": "99999-9999",
     "usuarioEmail": "joao@exemplo.com"
   }
   ```

3. Busque itens com filtros:

   ```
   GET /api/itens?status=PERDIDO&search=celular
   ```

4. Atualize um item usando o código recebido:
   ```
   PUT /api/itens/codigo/a1b2c3d4
   Body: {
     "descricao": "Celular com capa vermelha e tela trincada"
   }
   ```
