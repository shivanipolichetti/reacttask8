import Header from "../component/header"
import useCount from "../functionalcomponents/hooks/hooks/useEffect/Custom hooks/useCount";
import useCounter from "../functionalcomponents/hooks/hooks/useEffect/Custom hooks/useCounter";
import useToggle from "../functionalcomponents/hooks/hooks/useEffect/Custom hooks/useToggle";


const ContactScreen=()=>{
    const [age,incrementAge,decrementAge]=useCounter(100,1)
    const [salary,incrementSalary]=useCounter(10000,1000)
    const [fruits,addFruits]=useCount()
    const [value,multiplyValue]=useToggle()
  
    return(
        <>
        <Header/>
        <h3>{age}</h3>
        <button onClick={incrementAge}>increment Age</button>
        <button onClick={decrementAge}>decrement Age</button>
        <h3>{salary}</h3>
        <button onClick={incrementSalary}>increment salary</button>
        <h3>{fruits}</h3>
        <button onClick={addFruits}>Add Fruit</button>
        <h3>{value}</h3>
        <button onClick={multiplyValue}>multiply by 2</button>
        
        </>
    )
}
export default ContactScreen;