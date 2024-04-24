import { useContext, useEffect, useState } from "react";
import Header, { ChangeContext } from "../component/header";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            console.log(response);
            if (response.status === 200) {
                setProduct(response.data.products);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Header/>
            <h1>Welcome to HomeScreen</h1>
            <button>Click to change color of context</button>
            {
                product.length > 0 ? (
                    <>
                        {product.map(eachProduct => {
                            const { title, description, thumbnail, price, category, brand, id } = eachProduct;
                            return (
                                <div key={id} >
                                    <h4>{title}</h4>
                                    <h5>{brand}</h5>
                                    <img src={thumbnail} alt={title}/>
                                    <h5>{description}</h5>
                                    <h5>{category}</h5>
                                    <h5>${price}</h5>
                                    <button>
                                        <Link to={`${brand}/${id}`}>
                                            Click to See Product
                                        </Link>
                                    </button>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <h3>Loading.....</h3>
                )
            }
        </>
    );
};

export default HomeScreen;
