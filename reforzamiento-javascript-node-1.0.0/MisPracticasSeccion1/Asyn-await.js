//sinc y await
let getNombre = async()=>{
    return 'marcos';
}

getNombre().then(nombre =>{
    console.log(nombre);
}).catch(e=>{
    console.log("Error en el async/n",e)
})