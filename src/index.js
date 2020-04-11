const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");
const app = express();
app.use(cors());
app.use(express.json());

const projects = [];
// Log Middleware
function logRequests(req, res, next) {
  const { method, url } = req;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

// Validate project id Middleware
function valdiateProjectId(req, res, next) {
  const { id } = req.params;
  if (!isUuid(id)) {
    return res.status(401).json({ error: "Invalid project id" });
  }
  return next();
}
// aplicando o middleware
app.use(logRequests);
// aplicando o middleware para as rotas que recebem parametro
app.use("/projects/:id", valdiateProjectId);

// List
app.get("/projects", (req, res) => {
  const { title } = req.query;
  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;
  return res.json(results);
});
// Create
app.post("/projects", (req, res) => {
  const { title, owner } = req.body;
  const project = { id: uuid(), title, owner };
  projects.push(project);
  return res.json(project);
});

// Update
app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(404).json({ error: "Project not found" });
  }
  const project = { id, title, owner };
  projects[projectIndex] = project;
  return res.json(project);
});
// Delete
app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(404).json({ error: "Project not found" });
  }
  projects.splice(projectIndex, 1);
  return res.status(204).send();
});

app.listen(3333, () => {
  console.log("Back-end started!");
});
