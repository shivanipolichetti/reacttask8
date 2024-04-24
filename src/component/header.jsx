import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../navigation/navigation-stack";


export const ChangeContext=createContext()
const Header=()=>{
  const [color,setColor]=useState("black")
  const changeColor=()=>{
    setColor({color:"green"})
  }
    return(
      <ChangeContext.Provider value={{
        color,
        changeColor
      }}>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{margin:10}}>
        <Link to={"/"} style={{textDecoration:"none",color:"black"}}>
            Home
        </Link>
      </li>
      <li className="nav-item" style={{margin:10}}>
       <Link to={"about"} style={{textDecoration:"none",color:"black"}}>
        About
       </Link>
      </li>
      <li className="nav-item" style={{margin:10}}>
       <Link to={"contacts"} style={{textDecoration:"none",color:"black"}}>
        Contacts
       </Link>
      </li>
      <li className="nav-item" style={{margin:10}}>
       <Link to={"setting"} style={{textDecoration:"none",color:"black"}}>
        Settings
       </Link>
      </li>
      <li className="nav-item" style={{margin:10}}>
       <Link to={"register"} style={{textDecoration:"none",color:"black"}}>
        Register
       </Link>
      </li>
      <li className="nav-item" style={{margin:10}}>
       <Link to={"/"} style={{textDecoration:"none",color:"black"}}>
        Login
       </Link>
      </li>
    </ul>
  </div>
</nav>
</ChangeContext.Provider>
    )
}
export default Header;