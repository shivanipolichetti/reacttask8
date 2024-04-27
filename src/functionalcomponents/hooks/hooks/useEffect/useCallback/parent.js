import { useCallback, useState } from "react"
import CustomButton from "./customButton"
import Heading from "./heading"


const Parent=()=>{
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(20000)
  const increaseAge=useCallback(()=>{
    console.log(age)
     setAge(age+1)
   },[age])
    const increaseSalary=useCallback(()=>{
        console.log(salary)
        setSalary(salary+1000)
    },[salary])
   
    return(
     <>
     <h3>{age}</h3>
     <Heading/>
     <CustomButton title="age incremented" handleSubmit={increaseAge}/>
     <CustomButton title="salary incremented" handleSubmit={increaseSalary}/>
     </>
    )
}
export default Parent;