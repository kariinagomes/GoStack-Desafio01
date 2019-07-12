# GoStack-Desafio01

**Desafio 01. Conceitos do NodeJS**

Criação de uma aplicação do zero utilizando Express, a qual será utilizada para armazenar projetos e suas respectivas tarefas.

**Rotas criadas:**

* POST /projects: recebe o id e title dentro do corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };
* GET /projects: rota que lista todos projetos e suas tarefas;
* PUT /projects/:id : a rota altera apenas o título do projeto com o id presente nos parâmetros da rota;
* DELETE /projects/:id : a rota deleta o projeto com o id que esteja presente nos parâmetros da rota;
* POST /projects/:id/tasks: recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id que esteja presente nos parâmetros da rota;

**Exemplo:**

Chamando a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, o array de projetos deve ficar assim:
```
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```
**Middlewares:**

* Criação de um middleware para verificar se o projeto com aquele ID existe (utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL);
* Criação de um middleware global chamado em todas requisições que imprime através do console.log uma contagem de quantas requisições foram feitas na aplicação até então;

Esse desafio não precisou ser entregue, mas recebemos um link com o código do github com o respectivo código da solução.
