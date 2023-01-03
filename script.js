const address = document.getElementById('address')
const Submit_button = document.getElementById('Submit_button')
const iprsult = document.getElementById('iprsult')
const locationrsult = document.getElementById('locationrsult')
const timersult = document.getElementById('timersult')
const isprsult = document.getElementById('isprsult')
console.log('hii')
// maap
// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

Submit_button.addEventListener('click',()=>{
    const url= 'https://geo.ipify.org/api/v2/country,city?apiKey=at_irL25Ha8IHAaQnhu4ut1xEf0CGFRk&ipAddress='+ address.value
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> 
    {console.log(data),
        iprsult.innerHTML = (data.ip)
        locationrsult.innerHTML =(data.location.city)+","+" "+(data.location.region)+','+" "+(data.location.country)
        timersult.innerHTML= (data.location.timezone)
        isprsult.innerHTML= (data.isp)
        //map
        var map = L.map('map').setView([data.location.lat, data.location.lng], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    })
})

address.addEventListener('keypress',(event)=>{
    if(event.key ==="Enter"){
        const url= 'https://geo.ipify.org/api/v2/country,city?apiKey=at_irL25Ha8IHAaQnhu4ut1xEf0CGFRk&ipAddress='+ address.value
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> 
        {console.log(data),
            iprsult.innerHTML = (data.ip)
            const location = (data.location.city)+", "+(data.location.region)+', '+(data.location.country)
            locationrsult.innerHTML = location
            timersult.innerHTML= (data.location.timezone)
            isprsult.innerHTML= (data.isp)
            //map
            var map = L.map('map').setView([data.location.lat, data.location.lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        document.getElementById('disClaimer').innerHTML="To generate new map location kindely reolad the page."
        })
    }
})