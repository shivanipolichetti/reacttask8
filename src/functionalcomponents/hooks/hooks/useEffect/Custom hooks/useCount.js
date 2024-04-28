import { useState } from "react"

const useCount=()=>{
   const [fruits,setFruits]=useState(["apple","mango"])

   const AddFruit=()=>{
    const Fruits=[...fruits,"new fruit"]
    setFruits(Fruits)
   }

  return [fruits,AddFruit]
}
export default useCount;