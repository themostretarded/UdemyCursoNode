
//requireds
const fs = require('fs');
const color = require('colors');

let listarTabla = (base,limite)=>{

    console.log('============================='.green);
    console.log(`========tabla de ${ base }===========`.green);
    console.log('============================='.green);

    for(let i=1;i<=limite;i++){
        console.log(`${base} x ${i} = ${base*i}\n`);
        }
}

let crearArchivo = (base,limite = 10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`No me diste un numero chistosito,mira ${base}`);
        }

        let data =``;
        for(let i=1;i<=limite;i++){
            data+=(`${base} x ${i} = ${base*i}\n`);
            }
        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
            reject(err)
            else
            resolve(`tabla-${base}-al-${ limite }.txt`);
  });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

