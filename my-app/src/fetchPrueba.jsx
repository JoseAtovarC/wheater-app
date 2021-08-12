import React, { useState } from 'react'
import  {WeatherKey} from './keys/keys.js'


function Fetch (){
    const [clima,setClima]=useState()
    fetch( `http://openweathermap.org/img/wn/10d@2x.png`)
    .then(response=> response.json())
    .then(data=> setClima(data))

return <div>
    {/* <input   onClick={(e)=>{ 
        e.preventDefault()
        const ciudad=e.target.value;
        const Apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}`;
        fetch(Apiurl)
        .then(response => response.json())
        .then(data => console.log(data.weather[0].icon));
    }} /> */}
    <input onClick={(e)=>{ 
        
        const Apiurl2=`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${ WeatherKey}`;
        fetch(Apiurl2)
        .then(response => response.json())
        .then(data => console.log(data));
    }} />
   <img src={clima} alt="" /> 
</div>
}


export default Fetch;