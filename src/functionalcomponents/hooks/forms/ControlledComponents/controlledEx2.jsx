import { useState } from "react"
import "./index.css";

const ControlledEx2=()=>{
    const [formsErr,setformErr]=useState({
        usernameErr:null,
        emailErr:null,
        passwordErr:null,
        confirmpasswordErr:null
       
    })
    const [forms,setForms]=useState(
        {
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    }
)
    const changeHandler=(event)=>{
        const {value,name}=event.target
        console.log(value,name)
        setForms(prevState=>({
            ...prevState,[name]:value
        }))
        switch(name){
            case "username":
                if(value.length<7){
                    setformErr(prevState=>({...prevState,username:"enter the username more than 7 characters"}))
                }
                else{
                    setForms(prevState=>({...prevState,username:null}))
                }
                break;
                case "email":
                    if(value.length<17){
                        setformErr(prevState=>({...prevState,email:"enter the password that includes letters,number and special symbols"}))
                    }
                    else{
                        setForms(prevState=>({...prevState,email:null}))
                    }
                    break;
                    case "password":
                        if(value.length<7){
                            setformErr(prevState=>({...prevState,passwordErr:"enter username less than 7 characters"}))
                        }
                        else{
                            setForms(prevState=>({...prevState,password:null}))
                        }
                        break;
                        case "confirmpassword":
                            if(value.length<7){
                                setformErr(prevState({...prevState,confirmpasswordErr:"enter username less than 7 characters"}))
                            }
                            else{
                                setForms(prevState=>({...prevState,confirmpassword:null}))
                            }
                            break;
                default:
                   
        }


    }
    const  submitHandler=(event)=>{
        event.preventDefault()
        if(!forms.username||!forms.email||!forms.password||!forms.confirmpassword){
            alert("fill all the credentials")
        }

    }
return(
    <div className="cardcon">
        <h1>Register Form</h1>
    <form onSubmit={submitHandler}> 
        <label>UserName</label>
        <input type="text" value={forms.username}  
        name="username"
        onChange={changeHandler}/>
        {formsErr.usernameErr && <span style={{color:"red"}}>Invalid user name</span>}
        <br></br>
        <label>Email</label>
        <input type="text" value={forms.email} 
        name="email"
        onChange={changeHandler}/>
         {formsErr.emailErr && <span style={{color:"red"}}>Invaild email</span>}
         <br></br>
        <label>Password</label>
        <input type="text" value={forms.password} 
        name="password"
        onChange={changeHandler}/>
         {formsErr.passwordErr && <span style={{color:"red"}}>Invalid password</span>}
         <br></br>
        <label>Confirmpassword</label>
        <input type="text" value={forms.confirmpassword} 
        name="confirmpassword"
        onChange={changeHandler}/>
         {formsErr.confirmpasswordErr && <span style={{color:"red"}}>Invalid confirmpassword</span>}
         <br></br>
        <button type="submit">Register</button>
    </form>
    </div>
)
}
export default ControlledEx2;