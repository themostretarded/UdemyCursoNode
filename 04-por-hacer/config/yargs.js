
const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'
}
const completado = {
    alias:'c',
    default : true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
        .command('crear','Crear un elemento por hacer',{
            descripcion
        })
        .command('actualizar','Actualiza el estado completo de una tarea',{
            descripcion,
            completado
        })
        .command('borrar','Elimina una tarea',{
            descripcion
        })
        .help()
        .argv;

module.exports = {
    argv
}
