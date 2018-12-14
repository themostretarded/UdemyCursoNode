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

let getSalario =(empleado)=>{
    return new Promise((resolve,reject)=>{
        let salariodb = salarios.find(salario => empleado.id===salario.id);
        console.log(salariodb)
        if(!salariodb){
            reject(`No cuenta con salario`)
        }else{
            resolve(salariodb)
        }
    });
}

getSalario(2).then(salario=>{
    console.log(`Salario del empleado`,salario)
},(err)=>{
    console.log(err);
})

getEmpleado(4).then(empleado =>{
    console.log(` Empleado de db`,empleado);
},(err)=>{
    console.log(err);
});