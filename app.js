const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');
const info = require ('./info/info');

const argv =require ('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la cuidad a obtener el clima',
        deman: true
    }
    
}).argv;

lugar.getLugarLatLong(argv.direccion)
    .then (console.log);


clima.getClima(35,139)
    .then (console.log)
    .catch (console.log);

info.getInfo(argv.direccion)
    .then (console.log)
    .catch (console.log);
