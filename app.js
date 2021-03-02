const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! this is an exercise for AO to learn DEvOps with AWS, this is a new Modify 20210302 1216'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
