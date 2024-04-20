import axios from "axios"
import { useEffect, useState } from "react"




const UseEffectEx1=()=>{
    const [productListing,setProductListing]=useState([])
  const [eachProduct,setEachProduct]=useState({})
  const [count,setCount]=useState(1)
  const [age,setAge]=useState(100)
  useEffect(()=>{
    console.log("useEffect rendering......")
    fetchProducts()
    return ()=>{
      //prevent memory leaks
    }
  },[])
  useEffect(()=>{
    eachProductfetch()
  },[count])
  const eachProductfetch=async()=>{
    const response=await axios.get(`https://dummyjson.com/products/${count}`)
    console.log(response)
    setEachProduct(response.data)
  }
  const fetchProducts=async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    console.log(response)
    setProductListing(response.data.products)
  }

  const incrementCount=()=>{
    setCount(count+1)
  }
  const incrementAge=()=>{
    setAge(age+5)
  }
    return(
        <>
        <h1>UseEffect Example 1</h1>
        <h3>Current count:{count}</h3>
     <button onClick={incrementCount}>Click to change count</button>
     <h1>Current Age:{age}</h1>
     <button onClick={incrementAge}>Click to change age</button>
     {
      <h3>{eachProduct?.title}</h3>
     }
        </>
    )
}
export default UseEffectEx1;