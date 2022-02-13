
// Make map and tiles
const mymap = L.map('issMap').setView([0, 0], 6);
const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Make marker
const issIcon = L.icon({
iconUrl: 'iss-pic.png',
iconSize: [50, 32],
iconAnchor: [25, 16]
});
      
let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude, velocity, timestamp, visibility } = data;

 // Always set the view to current lat lon and zoom!
  mymap.setView([latitude, longitude], mymap.getZoom());
  marker.setLatLng([latitude, longitude]);

  const time = new Date(data.timestamp * 1000).toLocaleString("en-US");

  document.getElementById('lat').textContent = latitude.toFixed(3);
  document.getElementById('lon').textContent = longitude.toFixed(3);
  document.getElementById('vel').textContent = velocity.toFixed(2);
  document.getElementById('vis').textContent = visibility;
  document.getElementById('time').textContent = time;
   }

  getISS();
  setInterval(getISS, 1000);


  function submit(event) {
  event.preventDefault();
   }
  
  document.getElementById("input").onclick = function(){
    const userDate = document.getElementById("date_time").value;
    userDate.toLocaleString();
    document.getElementById("7").textContent = userDate;

    document.getElementById("loc1").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc2").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc3").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc4").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc5").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc6").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc7").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc8").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc9").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc10").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;        
    document.getElementById("loc11").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc12").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("loc13").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;


    var t = new Date(userDate);
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("6").textContent = t.toLocaleString();
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("5").textContent = t.toLocaleString();
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("4").textContent = t.toLocaleString();
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("3").textContent = t.toLocaleString();
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("2").textContent = t.toLocaleString();
    t.setMinutes( t.getUTCMinutes() - 10 );
    document.getElementById("1").textContent = t.toLocaleString();

     
    var k = new Date(userDate);
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("8").textContent = k.toLocaleString();
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("9").textContent = k.toLocaleString();
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("10").textContent = k.toLocaleString();
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("11").textContent = k.toLocaleString();
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("12").textContent = k.toLocaleString();
    k.setMinutes( k.getUTCMinutes() + 10 );
    document.getElementById("13").textContent = k.toLocaleString();
    }

        










      //Get the button:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }        