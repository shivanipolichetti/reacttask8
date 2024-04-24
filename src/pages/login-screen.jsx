import { useContext, useState } from "react";
import Header from "../component/header";
import { DataShare } from "../navigation/navigation-stack";


const LoginScreen=()=>{
    const [forms,setForms]=useState({
        username:"",
        password:""
    })
    const changerHandler=(event)=>{
        event.preventDefault()
        const {name,value}=event.target
        setForms(prevState=>({
            ...prevState,[name]:value
        }))

    }

    const handlerSubmit=(event)=>{
         event.preventDefault()
         const userDetails={
            username:"",
            password:""
         }
         console.log(userDetails)
        
    }
    const {data,changeLogin}=useContext(DataShare)
    return(
        <>
        <Header/>
        <h1>Welcome to Login Page {data.name}</h1>
        <form onSubmit={handlerSubmit}>
            <input type="text" placeholder="Enter the username" 
            value={forms.username}
            name="username"
            onChange={changerHandler}
            />
            <br></br> <br></br>
            <input type="text" placeholder="Enter the password" 
            value={forms.password}
            name="password"
            onChange={changerHandler}
            />
            <br></br> <br></br>
            <button type="submit" onClick={changeLogin}>Login</button>
        </form>
        </>
    )
}
export default LoginScreen;