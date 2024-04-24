import { useState } from "react"
import Header from "../component/header"


const RegisterScreen=()=>{
    const [forms,setForms]=useState({
        name:"",
        password:"",
        confirmpassword:""
    })
    const changeHandler=(event)=>{
        event.preventDefault()
        const {value,name}=event.target
        console.log(value,name)
        setForms(prevState=>({
            ...prevState,[name]:value
        }))
    }
    const handlerSubmit=(event)=>{
        event.preventDefault()
        const userDetails={
               name:"",
               password:"",
               confirmpassword:""
        }
        console.log(userDetails)
    }

    return(
        <div>
        <Header/>
        <h1>Welcome to Registeration</h1>
        <form onSubmit={handlerSubmit}>
            <input type="text" 
            placeholder="Enter Name" 
            value={forms.name}
            name="name" 
            onChange={changeHandler}/>
            <br></br> <br></br>
            <input type="text" 
            placeholder="Enter Password" 
            value={forms.password}
            name="password" 
            onChange={changeHandler}/>
             <br></br> <br></br>
            <input type="text" 
            placeholder="Enter Confirmpassword" 
            value={forms.confirmpassword}
            name="confirmpassword"
            onChange={changeHandler}/>
             <br></br> <br></br>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}
export default RegisterScreen;