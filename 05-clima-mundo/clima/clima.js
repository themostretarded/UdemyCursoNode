const axios = require('axios');

const getClima = async(lat,lng)=>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5a0a62f2ad355e45b0294d6b3c26e391`);

    if(resp.code === "400"){
        throw new Error('Alguna de las opciones trono')
    }

    return resp.data.main.temp;
}

module.exports={
    getClima
}