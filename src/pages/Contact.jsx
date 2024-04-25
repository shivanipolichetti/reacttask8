import { useContext } from "react";
import Header from "../component/header"
import { DataShare } from "../navigation/navigation-stack";
import UseReducerExample from "../functionalcomponents/hooks/hooks/useEffect/useReducer/useReducer";

const ContactScreen=()=>{
    const {data,changeData}=useContext(DataShare)
    return(
        <>
        <Header/>
        <h1>Welcome to ContactScreen {data.name}</h1>
        <button onClick={changeData}>Click to change name</button>
        <UseReducerExample/>
        </>
    )
}
export default ContactScreen;