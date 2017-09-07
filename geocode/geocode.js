const request = require('request');
var geoCodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  console.log(encodeURI);
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  }, (error,response,body)=>{
    if (error) {
      callback('Unable to Connect to Google Servers.');
    }else if(body.status==='ZERO_RESULTS') {
      callback('Unable to Find that address.');
    }else if(body.status==='OK') {
      callback(undefined , {
        address: body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng

      });
    }

  });

}

module.exports = {
  geoCodeAddress
};
