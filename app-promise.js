const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
  .options({
    a:{
      demand : true,
      alias: 'address',
      describe:'Address to fetch Weather for',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that Address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/510933f4d9f7c75022321666cf427f24/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response)=>{
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its Currently ${temperature}. It Feels like ${apparentTemperature}`);
}).catch((e) => {
  if(e.code==='ENOTFOUND'){
    console.log('Unable to Connect to API Servers.');
  }else {
    console.log(e.message);
  }
});
