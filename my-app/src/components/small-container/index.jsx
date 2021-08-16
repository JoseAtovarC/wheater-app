import "./styles.css";
import  React, { useEffect, useState, Fragment, useRef } from 'react'
import  {WeatherKey} from '../../keys/keys'
import LargeContainer from '../larger-container/index'
import { LocationSearching } from "@material-ui/icons";



function SmallContainer() {

  const [icono,seticon]=useState()
  const[temp,setTemp]=useState()
  const[main,setMain]=useState()
  const[description,setDescription]=useState()
  const[tempSymbol,setSymbol]=useState("ºC")
  const [lat,setlat]=useState()
  const [lon,setlon]=useState()
  const countRef = useRef();
  const [arrayCity,setArraycity]=useState([]);

  
  
  
  let showDate= new Date();
  let day= showDate.toDateString().slice(0,4);
  let hour=showDate.getHours()
  let minute=showDate.getMinutes()
  

 
  
  const changeTempF =()=>{
    
    const geo2= position=>{
      let{latitude,longitude}=position.coords
      let Apiurl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${ WeatherKey}&units=imperial`;  
    fetch(Apiurl)
    .then(response => response.json())
    .then(data =>{ 
      setTemp(Math.floor(data.current.temp))
      setSymbol("°F")
      
    });
    }
    navigator.geolocation.getCurrentPosition(geo2)

  }

  const changeTempBack =()=>{
    
    const geoback= position=>{
      let{latitude,longitude}=position.coords
      let Apiurl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${ WeatherKey}&units=metric`;  
    fetch(Apiurl)
    .then(response => response.json())
    .then(data =>{ 
      setTemp(Math.floor(data.current.temp))
      setSymbol("ºC")
      
      
    });
    }
    navigator.geolocation.getCurrentPosition(geoback)

  }


  const changeCity= (lati,long)=>{   
    let Apiurl2=`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=&appid=${ WeatherKey}&units=metric`;  
  fetch(Apiurl2)
  .then(response => response.json())
  .then(data =>{ 
    seticon(data.current.weather[0].icon)
    setTemp(Math.floor(data.current.temp))
    setMain(data.current.weather[0].main)
    setDescription(data.current.weather[0].description)
    
     
      });
    
}

  const changeTempC= position=>{   
    let{latitude,longitude}=position.coords
    let Apiurl2=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${ WeatherKey}&units=metric`;  
  fetch(Apiurl2)
  .then(response => response.json())
  .then(data =>{ 
    seticon(data.current.weather[0].icon)
    setTemp(Math.floor(data.current.temp))
    setMain(data.current.weather[0].main)
    setDescription(data.current.weather[0].description)
    setArraycity(arrayCity.push(data));
   
      });
    
}


useEffect((v)=>{
    
    navigator.geolocation.getCurrentPosition(changeTempC)
   

},[])


  return (
    
    <Fragment>
    <aside className="sideCard-container">

      <div className="small-header">
      <input
        className="inp-city"
        placeholder=" 🔍 Search for places..."
        onClick={(e)=>{ 
          e.preventDefault()
          let ciudad=e.target.value;
          if(ciudad!==""){
          const ApiurlFarenhit=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ WeatherKey}&units=imperial`;
          fetch(ApiurlFarenhit)
          .then(response => response.json())
          .then(data =>{console.log(data.coord)
            let{lon,lat}=data.coord
            changeCity(lat,lon)  
            ciudad=""    
          })}}}
      ></input>
      
           <button className="btn-geo" onClick={(e)=>   navigator.geolocation.getCurrentPosition(changeTempC)}> 
           <LocationSearching></LocationSearching></button>

           </div>


      <img src={`http://openweathermap.org/img/wn/${icono}@4x.png`} alt="" />
      <p className="big-number">
        {temp}<sup>{tempSymbol}</sup>
      </p>
      <p className="day">
        {day}, <span className="time">{hour}:{minute}</span>
      </p>
      <p className="info">{main}</p>
      <p className="info">{description}</p>
      
    </aside>
    <LargeContainer arrayCity={arrayCity} onChangetempF={changeTempF} onChangetempC={changeTempBack}  ></LargeContainer>
    </Fragment>
  );
}

export default SmallContainer;
