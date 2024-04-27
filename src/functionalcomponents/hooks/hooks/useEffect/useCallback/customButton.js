import React, { memo } from "react";



const CustomButton=({handleSubmit=()=>{} ,title="click"})=>{
    console.log("rendering",title)
    return(
       <button onClick={handleSubmit}>{title}</button>
    )
}
export default React.memo(CustomButton);