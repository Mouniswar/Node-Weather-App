const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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
//
geocode.geoCodeAddress(argv.address ,(errorMessage, results)=>{
  if (errorMessage) {
    console.log(errorMessage);
    }else {
      console.log(results.address);

    weather.getWeather(results.latitude ,results.longitude, (errorMessage, weatherResults)=>{
      if(errorMessage) {
        console.log(errorMessage);
      }else {
        console.log(`It's Currently ${weatherResults.temperature}. It Feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
