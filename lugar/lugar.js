const axios= require('axios');

const  getLugarLatLong = async(dir) => {
    
    const encodedUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '9878a58125mshaedb75df5ecb322p15df4djsnbd795bcd4d51'}
      });
    
     const resp = await instance.get();
     if (resp.data.Results.length === 0){
         throw new Error (`No hay resultados para ${dir}`);
     }

     const data = resp.data.Results[0];
     const direccion = data.name;
     const lat= data.lat;
     const lng= data.lon;
     
    return {
        direccion,
        lat,
        lng
    }
}

module.exports= {
    getLugarLatLong
}