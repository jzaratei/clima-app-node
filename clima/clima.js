const axios = require ('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=edee8540d6d522f3e3c675d3b5fd38df&units=metric`)
    
    return resp.data.main.temp;

}

module.exports = {
    getClima
}