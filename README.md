<h1 align="center"> Back-End my_contacts</h1>

<h4>Back-end do projeto, onde é possível: </h4>
 
 - Cadastro de usuário 
 - Listar usuário
 - Editar usuário
 - Deletar usuário
 - Login 
 - Cadastro de contatos
 - Listar contatos
 - Editar contatos
 - Deletar contatos

## Linguagens e tecnologias:

- JAVASCRIPT
- TYPESCRIPT
- NODEJS
- EXPRESS
- TYPEORM
- BCRYPT
- DOTENV
- EXPRESS-ASYNC-ERRORS
- JSONWEBTOKEN
- PG
- SQLITE3
- ZOD
- POSTGRESQL

## Instalação

1º Clonar o repositório em sua máquina
2º Criar um banco de dados no PostgreSQL
3º Instalar as depedências pelo comanto `yarn install`
4º Criar um arquivo `.env` na raíz do projeto com as suas configurações de acordo com o exemplo `.env.example`
5º Use o comando `yarn typeorm migration:run -d src/data-source.ts` para criação das tabelas no banco de dados
6º Rode o projeto pelo comando `run dev`

# Documentação

## Endpoints

<a href="#-users-">Users</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-login-">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-contacts-">Contacts</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<h2 align ='center'> Users </h2>

Essa rota não requer autenticação

#

`POST /users -  REQUISIÇÃO`

```JSON
{
  "name": "Aninha"
	"email": "ana@mail.com",
	"password": "123456",
	"phone": "123456789"
}
```

`POST /users -  RESPOSTA - STATUS 201`

```JSON
{
  "id": "b75169d4-1ee9-9869-b852-78845a33e12",
  "name": "Aninha"
	"email": "ana@mail.com",
	"phone": "123456789",
	"createdAt": "2023-06-04T21:31:11.301Z",
	"updatedAt": "2023-06-04T21:31:11.301Z"
}
```

#

Essas rotas requerem autenticação

`GET /users -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`GET /users -  RESPOSTA - STATUS 200`

```JSON
{ 
  "id": "b75169d4-1ee9-9869-b852-78845a33e12",
	"name": "Aninha"
  "email": "ana@mail.com",
	"phone": "41998745612",
	"contacts": []
}
```

#

`PATCH /clients -  REQUISIÇÃO`

```JSON
{
	"email": "ana123@mail.com"
}
```

`PATCH /clients -  RESPOSTA - STATUS 200`

```JSON
{
	"id": "b80883d4-8ee5-4501-b196-750952a21e47",
  "name": "Aninha"
	"email": "ana123@mail.com",
	"phone": "41998745612",
}
```

#

`DELETE /users -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`DELETE /users -  RESPOSTA - STATUS 204`

```
Não contém corpo de resposta
```

#

<h2 align ='center'> Login </h2>

Essa rota não requer autenticação

`POST /login -  REQUISIÇÃO`

```JSON
{
	"email": "ana@mail.com",
	"password": "123456"
}
```

`POST /login -  RESPOSTA - STATUS 200`

```JSON
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdHJpY2siLCJpYXQiOjE2ODUxMjkzMTgsImV4cCI6MTY4NTE0NzMxOCwic3ViIjoiMWE4ODA4MzYtNzFlNi00YTY3LThiYTktYjgyZDU3NDY1OWIyIn0.Q5qjT_j5IACjTRAq3y5Y5sD9wnEVFEhj4TbSZq80GBs"
}
```

#

<h2 align ='center'> Contacts </h2>

Essas rotas requerem autenticação

`POST /contacts -  REQUISIÇÃO`

```JSON
{
	"email": "eric@gmail.com",
	"fullName": "Eric Padilha",
	"phone": "41998234578"
}
```

`POST /contacts -  RESPOSTA - STATUS 201`

```JSON
{
	"email": "eric@gmail.com",
	"fullName": "Eric Padilha",
	"phone": "41998234578",
	"client": {
		"id": "b80883d4-8ee5-4501-b196-750952a21e47"
	},
	"id": "d5003114-6145-459d-953c-bf5045e4e86b",
	"createdAt": "2023-02-08T15:58:07.046Z",
	"updatedAt": "2023-02-08T15:58:07.046Z"
}
```

#

`GET /contacts -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`GET /contacts -  RESPOSTA - STATUS 200`

```JSON
[
	{
		"id": "62353c13-8abb-4b64-8ae6-3a79fe3ba10a",
    "name": "Janaina"
		"email": "janaina@mail.com",
		"phone": "987654321",
	}
]
```

#

`PATCH /contacts/:id -  REQUISIÇÃO`

```JSON
{
  	"email": "janizete@mail.com",
}
```

`PATCH /contacts/:id -  RESPOSTA - STATUS 200`

```JSON
{
	"id": "62353c13-8abb-4b64-8ae6-3a79fe3ba106a",
  "name": "Janaina",
	"email": "janizete@mail.com",
	"phone": "987654321",
}
```

#

`DELETE /contacts/:id -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`DELETE /contacts/:id -  RESPOSTA - STATUS 204`

```
Não contém corpo de resposta
```


---
