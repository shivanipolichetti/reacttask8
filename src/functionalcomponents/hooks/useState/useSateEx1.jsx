import { useState } from "react"


const UseStateEx1=()=>{
    const [count,setCount]=useState(0)
    const changeHandler=(value,type)=>{
        if(type==="increment"){
            setCount(count+value)
        }
        else if(type==="decrement"){
            setCount(count-value)
        }
        else{
            setCount(0)
        }
       
    }
    return(
        <div>
          <h1>Increment</h1> 
          <h4>{count}</h4> 
          <button onClick={()=>changeHandler(1,"increment")}>Increment Count</button>
          <button onClick={()=>changeHandler(1,"decrement")}>Decrement Count</button>
          <button onClick={()=>changeHandler()}>Reset Count</button>
        </div>
    )
}
export default UseStateEx1;