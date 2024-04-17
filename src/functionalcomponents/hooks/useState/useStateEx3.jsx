import { useRef, useState } from "react";


const UseStateEx3=()=>{
    const [timer,setTimer]=useState(100)
    const intervalIdRef=useRef(null)
    const startTimer=()=>{
        intervalIdRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer-1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(intervalIdRef.current)

    }
    const resetTimer=()=>{
        clearInterval(intervalIdRef.current)
        setTimer(100)
    }
    return(
        <div>
            <h1>Timer</h1>
            <h3 style={{color:timer<=10?"red":"green"}}>{timer}</h3>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
            
        </div>
    )
}

export default UseStateEx3;