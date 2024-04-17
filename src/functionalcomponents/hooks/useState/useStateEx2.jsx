import { useState } from "react"


const UseStateEx2=()=>{
    const [colors,setColors]=useState(["blue","white"])
    const addColor=()=>{
         const newColor=[...colors,"newcolor"]
         setColors(newColor)
    }
    const deleteColor=(index)=>{
        const newColor=colors.filter((eachColor,i)=>i!==index)
        setColors(newColor)
    }
    const updateColor=(index)=>{
        const newColor=colors.map((eachColor,i)=>{
            if(i===index){
                return "purple"
            }
            else{
                return eachColor
            }
        })
        setColors(newColor)
    }
    return(
        <div>
            <h1>UseState Example2</h1>
            <button onClick={addColor}>Add color</button>
            {colors.map((value,index)=><><h3 key={index}>{value}</h3>
             <button onClick={()=>deleteColor(index)}>Delete Color</button>
             <button onClick={()=>updateColor(index)}>Update color</button></>)}
        </div>
    )
}
export default UseStateEx2