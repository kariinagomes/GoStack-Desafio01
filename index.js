const express = require("express");

const server = express();

server.use(express.json());

// const projects = [
//   {
//     id: "1",
//     title: "New project",
//     tasks: []
//   }
// ];
const projects = [];
let numberOfRequests = 0;

function checkProjectIdExists(req, res, next) {
  const { id } = req.params;

  const project = getProjectById(id);

  if (!project) {
    return res.status(400).json({ error: "Please, enter a valid project id" });
  }

  return next();
}

function logNumberOfRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Number of requests: ${numberOfRequests}`);

  next();
}

server.use(logNumberOfRequests);

function getProjectById(id) {
  return projects.find(i => i.id == id);
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id: id,
    title: title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { tasks } = req.body;

  const project = getProjectById(id);

  project.tasks.push(tasks);

  return res.json(project);
});

server.put("/projects/:id", checkProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = getProjectById(id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectIdExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(i => i.id == id);

  projects.splice(index, 1);

  return res.json(projects);
});

server.listen(3000);
