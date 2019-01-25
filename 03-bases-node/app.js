const argv = require('./config/yarg').argv;
const color = require('colors');

const { crearArchivo,listarTabla } = require ('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch( comando ){
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`el archivo: ${archivo.green} fue creado`))
            .catch(e=>console.log(e));
    break;

    default:
    console.log('te mamaste');
}

//let parametro = argv[2];
//let base = parametro.split('=')[1];




