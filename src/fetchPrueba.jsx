// import React, { useEffect, useState, useRef } from 'react'
// import  {WeatherKey} from './keys/keys.js'


// function Fetch (){

   
//     const countRef = useRef();

   
   
// return <div>
     
//     <input ref= {countRef}  />

//     <button onClick={(e)=>{ 
//         e.preventDefault()
//         const ciudad=countRef.current.value;
//         const ApiurlFarenhit=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}&units=imperial`;
//         fetch(ApiurlFarenhit)
//         .then(response => response.json())
//         .then(data =>{
//                 console.log(data)
//         });
//     }}>add</button>
//   <input type="text" onClick={(e)=>{
//         const ciudad=countRef.current.value;
//        const Apiurlcelsius=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}`;
//        fetch(Apiurlcelsius)
//        .then(response => response.json())
//        .then(data => { console.log(data)
         
//           })
//   }} />
   



     
// </div>
// }


// export default Fetch;




