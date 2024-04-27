import { useMemo, useState } from "react";

const UseMemo=()=>{  
    const [num,setNum]=useState(0)
    const numChecker=useMemo(()=>{
        console.log("numCheckEven rendering")
        const even = num % 2 === 0
        return even? "even num":"odd num"
    },[num])
      
    const incrementNum=()=>{
        setNum(num+1)
    }
    return(
        <>
        <h4>UseMemo Example</h4>
        <h5>Num checker even or odd:{numChecker}</h5>
        <h5>{num}</h5>
        <button onClick={incrementNum}>increment count</button>
        </>
    )
}
export default UseMemo;

