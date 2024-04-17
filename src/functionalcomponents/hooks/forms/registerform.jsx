import { useRef, useState } from "react";


const RegisterForm=()=>{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    const [details,setDetails]=useState([])
    const changeHandler=(event)=>{
        event.preventDefault()
        if(usernameRef.current.value.length<5){
            alert("username must be 5 characters")
        }
        else{
            setDetails([
                ...details,
                {
                   username:usernameRef.current.value,
                   password:passwordRef.current.value

                }
            ])
            usernameRef.current.value=""
            passwordRef.current.value=""
        }
    }
    return(

        <div>
           <form onSubmit={changeHandler}> 
            <h1>Login Form</h1>
            <br></br><br></br>
           <input type="text" placeholder="Username" ref={usernameRef}></input>
            <br></br><br></br>
            <input type="text"  placeholder="Password" ref={passwordRef}></input>
            <br></br><br></br>
            <input type="submit"></input>
           </form>
           <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                    {
                        details.map((val,index)=>{
                           return(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                        </tr>
                           )
                        })
                    }
                </thead>
            </table>
           </div>
        </div>
    )
}
export default RegisterForm;