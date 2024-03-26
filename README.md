<div align="center">
  <h1>Notifications Service</h1>
  <p>Notifications Service é um serviço de mensageira que permite criar notificações, marcar como lida e nao lida, listar e contabilizar mensagens de um usuário. Desenvolvido com o framework NestJS com a clean architecture.</p>
</div>

# 📒 Índice
* [Descrição](#descrição)
* [Requisitos Funcionais](#requisitos)
* [Tecnologias](#tecnologias)
* [Instalação](#instalação)
* [Licença](#licença)

# 📃 <span id="descrição">Descrição</span>
Notifications Service é um serviço de mensageira que permite criar notificações, marcar como lida e nao lida, listar e contabilizar mensagens de um usuário. Desenvolvido com o framework [**NestJS**](https://nestjs.com/) com a clean architecture, com a adição de libs como [**Prisma ORM**](https://www.prisma.io/) para auxilio na manipulação dos dados para um banco de dados e [**Jest**](https://jestjs.io/pt-BR/) para a cobertura de testes.

# 📌 <span id="requisitos">Requisitos Funcionais</span>
- [x] Cadastrar notificação<br>
- [x] Marcar notificação como lida<br>
- [x] Marcar notificação como não lida<br>
- [x] Listar todas as notificações de um usuário<br>
- [x] Contar todas as notificações de um usuário<br>

# 💻 <span id="tecnologias">Tecnologias</span>
- **TypeScript**
- **NestJS**
- **Class Validation**
- **Prisma ORM**
- **Jest**

# 📍 <span id="endpoints">Endpoints</span>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| Endpoint               | Resumo                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /notification</kbd>     | Responsável por cadastrar notificação
| <kbd>PATCH /notification/:id/read</kbd>     | Responsável por marcar notificação como lida
| <kbd>PATCH /notification/:id/unread</kbd>     | Responsável por marcar notificação como não lida
| <kbd>GET /notification/count/from/:recipientId</kbd>     |   Responsável por listar todas as notificações pelo ID do usuário
| <kbd>GET /notification/from/:recipientId</kbd>     | Responsável por Contar todas as notificações pelo ID do usuário

# 🚀 <span id="instalação">Instalação</span>
```bash
  # Clone este repositório:
  $ git clone https://github.com/CleilsonAndrade/notifications-service.git
  $ cd ./notifications-service

  # Instalar as dependências:
  $ yarn install

  # Gerar o código TypeScript com base nos modelos do Prisma:
  $ npx prisma generate

  # Aplicar migrações ao banco de dados:
  $ npx prisma migrate dev

  # Executar:
  $ yarn start:dev
  
  # Executar testes:
  $ yarn test:watch
```

# 📝 <span id="licença">Licença</span>
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 by CleilsonAndrade
</p>