//  ===============
//  Puerto
//  ===============
process.env.PORT = process.env.PORT || 3000;


//  ===============
//  Entorno
//  ===============
process.env.NODE_ENV = process.env_NODE_ENV || 'dev';

//  ===============
//  Vencimiento del token
//  ===============
//  60 segundos
//  60 minutos
//  24 horas
//  30 dias
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//  ===============
//  SEED de autenticacion
//  ===============
//  heroku config:set SEED="este-es-el-seed-produccion"
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//  ===============
//  Base de datos
//  ===============
/*En la terminal de se escribe heroku config:set MONGO_URI="mongodb://cafe-user:a123456@ds335275.mlab.com:35275/cafe"
y ahora se usa de variable de entorno para ver las varias con heroku config */
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    //urlDB = process.env.MONGO_URI
    urlDB = 'mongodb://cafe-user:a123456@ds335275.mlab.com:35275/cafe'
}
process.env.URLDB = urlDB;