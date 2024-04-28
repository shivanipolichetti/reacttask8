import { useState } from "react"


const useCounter=(value,scale)=>{
    const [count,setCount]=useState(value)
    const incrementCount=()=>{
        setCount(count+scale)
    }
    const decrementCount=()=>{
        setCount(count-scale)
    }
    return [count,incrementCount,decrementCount]
}
export default useCounter;