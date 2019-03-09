const express = require('express');

const app = express();


app.use(require('./usuario.js'));
app.use(require('./login.js'));
app.use(require('./categoria'));
app.use(require('./producto'));
app.use(require('./imagenes'));
app.use(require('./upload'));


module.exports = app