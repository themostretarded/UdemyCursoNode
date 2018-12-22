//promise
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

let getEmpleado = (id) => {

   return new Promise((resolve,reject)=>{
    let empleadosDB = empleados.find(empleado => empleado.id === id)
    if (!empleadosDB) {
        reject(`No existe un empleado con el id ${id}`)
    } else {
        resolve(empleadosDB);
    }
   });
    
}

let getSalario = (empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioDB = salarios.find(salario =>salario.id===empleado.id);
    if(!salarioDB){
        reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
    }else{
        resolve({
            nombre:empleado.nombre,
            salario: salarioDB.salario,
            id:empleado.id
        });
    }
    });
}

getEmpleado(3).then(empleado =>{
    getSalario(empleado).then(resp =>{
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`)
    },err =>{
        console.log(err)
    });

},(err)=>{
    console.log(err);
});




/*Mi solucion pedorra
let getSalario =(empleado)=>{
    let empleadoparam=empleado;
    return new Promise((resolve,reject)=>{
        let salariodb = salarios.find(salario => salario.id===empleado);
        let nombredb = empleados.find(empleado => empleado.id === empleadoparam);
        if(!salariodb){
            reject(`No cuenta con salario`)
        }else{
            resolve({
                nombre:nombredb.nombre,
                salario: salariodb.salario
            });
        }
    });
}

getSalario(1).then(Chingado => {
    console.log(`Salario del empleado`,Chingado)
},(err)=>{
    console.log(err);
})
*/