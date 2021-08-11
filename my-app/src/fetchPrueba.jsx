import React, { useState } from 'react'
import  {WeatherKey} from './keys/keys.js'


function Fetch (){
    const [clima,setClima]=useState([""])

return <div>
    <input onClick={(e)=>{ 
        const ciudad=e.target.value;
        const Apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}`;
        fetch(Apiurl)
        .then(response => response.json())
        .then(data => setClima(data.clouds.all));
    }} />
    <input onClick={(e)=>{ 
        
        const Apiurl2=`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${ WeatherKey}`;
        fetch(Apiurl2)
        .then(response => response.json())
        .then(data => console.log(data));
    }} />
    <p>{clima}</p>
</div>
}


export default Fetch;