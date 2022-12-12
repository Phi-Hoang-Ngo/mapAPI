


async function getGeo(city) {
 
  let xyz = city;
  let url = ("https://geocode.xyz/" + xyz + "?json=1");
  let settings = { mode: 'cors' };

  
   await fetch(url, settings)
    .then( response)
    .then(printCityInfo);

    function response(received) {
      if (received.ok) {
        return received.json();
      }
    }
}

function printCityInfo(city) {
  console.log(city.standard.city + " " + city.standard.countryname + "\nlongitude: " + city.longt + "\nlatitude: " + city.latt);
}

getGeo("new_orleans");