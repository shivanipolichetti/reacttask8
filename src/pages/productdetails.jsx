import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails=()=>{
    const {productId}=useParams()
    const [products,setProducts]=useState({})
    useEffect(()=>{
      fetchProduct()
   },[])
   const fetchProduct=async()=>{
    try{
        const response=await axios.get(`https://dummyjson.com/products/${productId}`)
        if(response.status===200){
           setProducts(response.data)
        }
    }catch(err){
        console.error(err)
    }
   }
    return(
        <>
        <h1>Product Details</h1>
       {
        <>
        <h3>{products.title}</h3>
        <h3>{products.brand}</h3>
        <img src={products.thumbnail}/>
        <h3>{products.description}</h3>
        <h3>{products.category}</h3>
        <h3>${products.price}</h3>
        <button>Add to cart</button>
        </>
       }

        </>
    )
}
export default ProductDetails;