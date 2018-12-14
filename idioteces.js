let getUsuarioById = (id, callback) =>{
    
    let usuario ={
        nombre: 'Fernando',
        id
    }
    if(id===20){
        callback(`trono esta madre por el ${id}`);
    } else {
        callback(null,usuario);
    }
    
}

getUsuarioById(20,(err,usuario)=>{
    if(err){
       return console.log(err);
    }
    console.log('usuario de  base de datos',usuario);
}

);