import { useNavigate } from "react-router-dom";


const InvalidScreen=()=>{
    const navigate=useNavigate()

    const navigateToHome=()=>{
         navigate("/")
    }
    return(
        <>
        <h1>InvalidScreen</h1>
        <button onClick={navigateToHome}>Back to Home page</button>
        </>
    )
}
export default InvalidScreen;