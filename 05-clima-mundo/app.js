


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) =>{

    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat,coors.lgn);

    return `El clima en ${coors.direccion} es de ${temp}`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp=>{
        console.log(resp);
    })
    .catch(e =>console.log(e));

clima.getClima(25.6866142,-100.3161126)
    .then(temp => console.log(temp))
    .catch(e =>console.log(e));*/