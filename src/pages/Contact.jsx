import { useContext } from "react";
import Header from "../component/header"
import UseMemo from "../functionalcomponents/hooks/hooks/useEffect/useMemo/useMemo";
import Parent from "../functionalcomponents/hooks/hooks/useEffect/useCallback/parent";



const ContactScreen=()=>{
  
    return(
        <>
        <Header/>
       {/* <UseMemo/>*/}
       <Parent/>
      
        </>
    )
}
export default ContactScreen;