
//requireds
const fs = require('fs');

let crearArchivo = (base)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`No me diste un numero chistosito,mira ${base}`);
        }

        let data =``;
        for(let i=1;i<=10;i++){
            data+=(`${base} x ${i} = ${base*i}\n`);
            }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
            reject(err)
            else
            resolve(`tabla-${base}.txt`);
  });

    })
}

module.exports = {
    crearArchivo
}

