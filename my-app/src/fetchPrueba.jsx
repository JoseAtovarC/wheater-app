import React, { useEffect, useState } from 'react'
import  {WeatherKey} from './keys/keys.js'


function Fetch (){
   useEffect(){ navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });}

return <div>

    <input   onClick={(e)=>{ 
        e.preventDefault()
        const ciudad=e.target.value;
        const ApiurlFarenhit=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}&units=imperial`;
        fetch(ApiurlFarenhit)
        .then(response => response.json())
        .then(data => console.log(data));
    }} />
    <input   onClick={(e)=>{ 
        e.preventDefault()
        const ciudad=e.target.value;
        const Apiurlcelsius=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}`;
        fetch(Apiurlcelsius)
        .then(response => response.json())
        .then(data => console.log(data));
    }} />
    <input onClick={(e)=>{ 
        
        const Apiurl2=`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${ WeatherKey}`;
        fetch(Apiurl2)
        .then(response => response.json())
        .then(data => console.log(data));
    }} />



     
</div>
}


export default Fetch;