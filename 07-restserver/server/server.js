require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({  extended: false}));

//habilitar public
app.use( express.static(path.resolve( __dirname ,'../public')));

// parse application/json
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require('./routes/index.js'));

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true
}, (err, res) => {
  if (err) throw (err);
  console.log('base de datos online');
});

app.listen(process.env.PORT, () => {
  console.log(`escuchando en el puerto ${process.env.PORT}`);
})