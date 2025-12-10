// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const path = require("path");
const morgan = require("morgan");

// IMPORT DATA
// Importamos los archivos JSON para usarlos en las rutas de la API
// const projects = require('./data/projects.json');
// const articles = require('./data/articles.json');

// ATTRIBUTES
const PORT = process.env.PORT || 5005;

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static(path.join(__dirname, "public")));
// - `express.json()` to parse incoming requests with JSON payloads
// app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
// GET /team - TEAM
app.get("/team", (_req, res) => {
    res.sendFile(path.join(__dirname, "views", "team.html"));
});

// GET /about - ABOUT
app.get("/about", (_req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

// GET /api/projects - JSON Format
// app.get("/api/projects", (_req, res) => {
//    res.json(projects);
// });

// 404 ROUTE - ERROR
app.use((_req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})