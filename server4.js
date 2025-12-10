// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { palindrome } = require("./utils/palindrome/index");

// IMPORT DATA
// Importamos los archivos JSON para usarlos en las rutas de la API
// const projects = require('./data/projects.json');
// const articles = require('./data/articles.json');

// ATTRIBUTES
const PORT = process.env.PORT || 3001;

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
app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// GET /team - TEAM
app.get("/team", (_req, res) => {
    res.sendFile(path.join(__dirname, "views", "team.html"));
});

// GET /about - ABOUT
app.get("/about", (_req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

// GET /patient/:idPatient - PATIENT
app.get("/patient/:idPatient", (req, res) => {
    const idPatient = req.params.idPatient;
    const documentPath =path.join(__dirname, "data", `${idPatient}.pdf`);
    res.sendFile(documentPath);
});

// GET /check/:palabra - CHECK
app.get("/check/:palabra", (req, res) => {
    const palabra = req.params.palabra;
    console.log("🚀 ~ file: server4.js:56 ~ app.get ~ palabra:", palabra);
    const isPalindrom = palindrome(palabra);
    res.send(`La palabra ${palabra} ${isPalindrom ? 'es' : '<strong>no es</strong>'} un palindromo.`);
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
});
