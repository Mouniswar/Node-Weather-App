const request = require('request');
var getWeather = (lat,lng,callback) => {
  request({
    url:`https://api.darksky.net/forecast/510933f4d9f7c75022321666cf427f24/${lat},${lng}`,
    json:true
  }, (error,response,body)=>{
    if(error) {
      callback('Unable to Connect to Forecast.io');
    }else if(response.statusCode===400){
      callback('Unable to Fetch Weather');
    }else if(response.statusCode===200) {
      callback(undefined, {
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }

  });
}

module.exports = {
  getWeather
};
