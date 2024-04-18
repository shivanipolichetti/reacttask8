import { useState } from "react";
import "./index.css";

const ControlledEx1=()=>{
    const [username,setuserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setconfirmPassword]=useState("")
    const [usernameErr,setusernameErr]=useState(null)
    const [emailErr,setemailErr]=useState(null)
    const [passwordErr,setpasswordErr]=useState(null)
    const [confirmpasswordErr,setconfirmpasswordErr]=useState(null)

    const userNameHandler=(event)=>{
        event.preventDefault()
        const userName=event.target.value
        setuserName(userName)
        console.log(userName)
        if(userName.length>6){
            setusernameErr("username should not be more than 6 characters")
        }
        else{
             setusernameErr(null)
        }

    }
    const emailHandler=(event)=>{
        event.preventDefault()
        const email=event.target.value
        setEmail(email)
        console.log(email)
        if(email.length<16){
            setemailErr("email should have @ in the middle")
        }
        else{
            setemailErr(null)
        }

    }
    const passwordHandler=(event)=>{
        event.preventDefault()
        const password=event.target.value
       setPassword(password)
       if(password.length<10){
        setpasswordErr("password should not more than 10 characters")
       }
       else{
        setpasswordErr(null)
       }

    }
    const confirmpasswordHandler=(event)=>{
        event.preventDefault()
       const confirmpassword=event.target.value
       setconfirmPassword(confirmpassword)
       if(confirmpassword.length<10){
         setconfirmpasswordErr("password and confirmpassword are not same")
       }
       else{
        setconfirmPassword(null)
       }

    }
    const handlerSubmit=(event)=>{
        event.preventDefault()
        const userDetails={
            username:username,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }
        console.log(userDetails)

    }
    return(
        <div className="cardcon">
        <h1>Registration form</h1>
        <form onSubmit={handlerSubmit}>
        <label>Userame</label>
        <input type="text"
        value={username}
        onChange={userNameHandler}/>
        {usernameErr && <span style={{color:"red"}}>Invalid username</span>}
        <br></br>
        <label>Email</label>
        <input type="text"
        value={email}
        onChange={emailHandler}/>
        {emailErr && <span style={{color:"red"}}>email should be like example@gmail.com</span>}
        <label>Password</label>
        <input type="text"
        value={password}
        onChange={passwordHandler}/>
        {passwordErr && <span style={{color:"red"}}>Invalid Password</span>}
        <label>ConfirmPassword</label>
        <input type="text"
        value={confirmpassword}
        onChange={confirmpasswordHandler}/>
        {confirmpasswordErr && <span style={{color:"red"}}>password and confirmpassword are not same</span>}
        <input type="submit" className="Submit"/>
    </form>
    </div>
    
    )
}
export default ControlledEx1;