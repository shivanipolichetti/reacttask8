import { type } from "@testing-library/user-event/dist/type";
import { Button } from "bootstrap";
import { useReducer } from "react";

const reducerFunction=(state,action)=>{
    switch(action.type){
        case "INCREMENT_COUNT":
            return{...state,count:state.count+1}
        case "DECREMENT_COUNT":
            return{...state,count:state.count-1}
        case "RESET_COUNT":
            return{...state,count:0}
        case "CHANGE_NAME":
            return{...state,name:"xyz"}
        default:
            return state
    }

}
const initialState={
    name:"abc",
    city:"hyderabad",
    age:100,
    salary:1000,
    count:0
}

const UseReducerExample=()=>{
    const [currentValue,dispatchFunction]=useReducer(reducerFunction,initialState)
    const incrementCount=()=>{
        const action={
            type:"INCREMENT_COUNT"
        }
          dispatchFunction(action)
    }
    const decrementCount=()=>{
        const action={
            type:"DECREMENT_COUNT"
        }
       dispatchFunction(action)
    }
    
    return(
        <>
        <h4>UseReducer Example</h4>
        <h5>{currentValue.count}</h5>
        <h5>{currentValue.name}</h5>
        <button>Increment Age</button>
        <button>Decrement Age</button>
        <button>Reset Age</button>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>Decrement Count</button>
        <button onClick={()=>{
            dispatchFunction({
                type:"RESET_COUNT"
            })
        }}>Reset count</button>
        <button onClick={()=>{
            dispatchFunction({
                type:"CHANGE_NAME"
            })
        }}>Click to chnage Name</button>
        </>
    )
}
export default UseReducerExample;