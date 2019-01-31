
const axios = require('axios');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)
    .then(resp =>{
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        //location.geometry.location.lat,location.geometry.location.lng
        console.log(`Direccion: ${location.formatted_address}`);
        console.log(`lat:${coors.lat}`);
        console.log(`lng:${coors.lng}`);
        //console.log(JSON.stringify(resp.data,undefined,2));
        //console.log(resp.status);
    })
    .catch(e => console.log('ERROR !!!!',e));