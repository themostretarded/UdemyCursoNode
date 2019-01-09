//callback
let empleados = [{
        id: 1,
        nombre: `Fernando`
    }, {
        id: 2,
        nombre: `Melissa`
    },
    {
        id: 3,
        nombre: `Juan`
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {

    /*let empleadosDB = empleados.find( empleado =>{
        return empleado.id === id
    })*/
    let empleadosDB = empleados.find(empleado => empleado.id === id)
    if (!empleadosDB) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, empleadosDB);
    }
}

let getSalario =(empleado,callback)=>{
    /*let salariodb= salarios.find(salario=>{
        return salario.id === empleado.id
    });*/
    let salarioDB = salarios.find(salario =>salario.id===empleado.id);
    if(!salarioDB){
        callback(`No se encontro un salario para el usuario ${empleado.id}`)
    }else{
        callback(null,{
            nombre:empleado.nombre,
            salario: salarioDB.salario,
            id:empleado.id
        })
    }

}
getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado,(err,respuesta) =>{
        if(err){
            return console.log(err)
        }
        console.log(`el salario de ${respuesta.nombre} es de $${respuesta.salario}`)
    })
});

/*Mi solucion
let getSalario = (empleado, callback) => {
    let empleadosDB = empleados.find(trabajador => {
        return trabajador.id === empleado;
    });

    let salarioEmpleados = salario.find(suSalario => {
        if(suSalario.id===empleado){
        return suSalario.id === empleado;
        }else{
            return 0
        }
    });
    if (!empleadosDB ) {
        callback(`No existe este wey ${empleado}`);
    } 
    if(!salarioEmpleados){
        callback(`Este wey no esta contratado ${empleado}`)
    }else{
    let orden = `${empleadosDB.nombre} ${salarioEmpleados.salario}`
    return callback(null,orden)
    }
}
getSalario(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado)
});*/