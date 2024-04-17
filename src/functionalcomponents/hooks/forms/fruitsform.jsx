import { useRef, useState } from "react";



const FruitList=()=>{
    const userInput=useRef("")
    const [fruits,setFruit]=useState(["apple","mango"])
    const newFruit=(e)=>{
        e.preventDefault()
         setFruit([...fruits,userInput.current.value])
         console.log(userInput.current.value)
         userInput.current.value=""
    }
    return(
        <div>
            <form onSubmit={newFruit}>
                <h1>Form Example 1</h1>
                <input type="text" placeholder="enter fruit" ref={userInput}></input>
                <br></br>
                 <br></br>
                <input type="submit"></input>
                </form>
               <div>
                <ol>
                    {
                        fruits.map((val)=>{
                            return(
                                <li>{val}</li>
                            )
                        })
                    }
                </ol></div>
        </div>
    )
}
export default FruitList;