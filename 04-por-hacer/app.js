//const argv = require('yargs').argv
const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];
//console.log(comando);

switch( comando ){
    
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
    break;

    case 'listar':
        
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('========Porhacer==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('===========================\n'.green);
        }

    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado)
    break;

    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado)
    break;

    default:
        console.log('Comando no es renocido');
    
}
