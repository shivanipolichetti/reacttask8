import { useRef, useState } from "react";

const SigupDetails=()=>{
    const usernameRef=useRef("")
    const mailRef=useRef("")
    const passwordRef=useRef("")
    const phoneNumberRef=useRef("")
    const [errorVisible,setErrorVisible]=useState(false)
    const [info,setInfo]=useState([])
    const registerButton=(event)=>{
        event.preventDefault()
        //console.log("submitted")
        if(usernameRef.current.value.length<5){
            setErrorVisible(true)
            //alert("username must have 5 characters")
        }
        else{
            setErrorVisible(false)
            setInfo([
                ...info,{
                    username:usernameRef.current.value,
                    email:mailRef.current.value,
                    password:passwordRef.current.value,
                    phonenumber:phoneNumberRef.current.value
                }
            ])
            usernameRef.current.value=""
            mailRef.current.value=""
            passwordRef.current.value=""
            phoneNumberRef.current.value=""
        }
    }
    return(
        <div>  
         <h1>Registration Form</h1>
         <form onSubmit={registerButton}>
            <input type="text" placeholder="name" ref={usernameRef}></input>
            <br></br><br></br>
            <input type="text" placeholder="email" ref={mailRef}></input>
            <br></br><br></br>
            <input type="password" placeholder="password" ref={passwordRef}></input>
            <br></br><br></br>
            <input type="text" placeholder="phonenumber" ref={phoneNumberRef}></input>
            <br></br><br></br>
            <input type="submit"></input>
         </form>
         <div>
            {errorVisible&&<span style={{color:"red"}}>username must have 5 characters</span>}
            <table border="2">
                <thead>
                <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Mail id</th>
                <th>Password</th>
                <th>PhoneNumber</th>
                </tr>
                </thead>
                <tbody>
                    {
                         info.map((val,index)=>{
                            return(
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.phonenumber}</td>
                            </tr>
                            )
                         })
                    }
                </tbody>

            </table>
         </div>
        </div>
    )
}
export default SigupDetails;