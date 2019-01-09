const { crearArchivo } = require ('./multiplicar/multiplicar.js')

let base = 7;

crearArchivo(4)
    .then(archivo => console.log(`el archivo ${archivo} fue creado`))
    .catch(e=>console.log(e));

