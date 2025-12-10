const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.get('/mensaje', (_req, res) => {
    res.send(`
    <h1>El servidor funciona correctamente</h1>
    <p>Aquí iría el contenido del mensaje</p>
    `);
});

app.use((req, res, next) => {
    const route404 = path.join(__dirname,"views","404.html");
    res.status(404).sendFile(route404);
});

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});