const { crearArchivo } = require ('./multiplicar/multiplicar.js')npm install --save-dev nodemon

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`el archivo ${archivo} fue creado`))
    .catch(e=>console.log(e));

