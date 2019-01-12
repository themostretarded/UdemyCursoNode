const { crearArchivo } = require ('./multiplicar/multiplicar.js')


//console.log(process.argv)

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

/*crearArchivo(9)
    .then(archivo => console.log(`el archivo ${archivo} fue creado`))
    .catch(e=>console.log(e));
*/
