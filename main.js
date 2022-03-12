
//build API endpoint based on value chosen by the user
function buildEndpoint (timezone) {
  url = 'http://worldclockapi.com/api/json/' + timezone + '/now';
  return url;
}

//call the API to get the current date time of the timezone chosen by the user
function getCurrentTime(){
  fetch(buildEndpoint(timezone = document.getElementById('time-zone').value)).then(function(response) {
    response.json().then(function(data) {
      timenow = String(data.currentDateTime);
      document.getElementById('loading').innerText = timenow;
    });
  }).catch(function(err) {
    document.getElementById('loading').innerText ='Failed retrieving current time' + err;
  }); 
}