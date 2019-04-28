
const lugar = require ('../lugar/lugar');
const clima = require ('../clima/clima');

const getInfo = async (direccion) => {

    try {
        const coords= await lugar.getLugarLatLong(direccion);
        const temp= await clima.getClima(coords.lat, coords.lng);
        return console.log(`El clima de ${direccion} es de ${temp}`);
        
    } catch (error) {
        throw new Error (`No se pudo determinar el clima de ${direccion}`);
        
    }
}

module.exports = {
    getInfo
}