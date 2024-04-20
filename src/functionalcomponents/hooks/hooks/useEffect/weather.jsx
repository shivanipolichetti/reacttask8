import axios from "axios";
import { useState } from "react";

const WeatherCheck=()=>{
    const [temp,settemp]=useState(null)
    const [cityname,setCityname]=useState("")
    const changeHandler=(event)=>{
      event.preventDefault()
      const cityname=event.target.value
      setCityname(cityname)
      console.log(cityname)
    } 
    const handlerSubmit=(event)=>{
        event.preventDefault()
        fetchApiweather()
        setCityname("")
        console.log(cityname)
    }  
    const fetchApiweather=async()=>{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=3915a847e4e95c668b1e8f5b8b8c6bb8`)
        //console.log(response)
        const temp=response.data.main.temp
        console.log(temp)
        settemp(temp)
    }
    return(
    <div>
        <h1>Weather checker</h1>
        <form onSubmit={handlerSubmit}>
            <input type="text" value={cityname} onChange={changeHandler}/>
            <button type="submit">Click to check temperature</button>
        </form>
        <h1>temperature:{temp}</h1>
    </div>
   )
}
export default WeatherCheck;