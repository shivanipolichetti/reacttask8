import { useState } from "react"


const useToggle=()=>{
    const [value,setValue]=useState(1)
    
    const toggle=()=>{
       setValue(value*2)
    }
    return [value,toggle]
}
export default useToggle