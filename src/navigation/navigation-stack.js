import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/homeScreen";
import ContactScreen from "../pages/Contact";
import InvalidScreen from "../pages/Invalidscreen";
import About from "../pages/about";
import Settings from "../pages/settings";
import ProductDetails from "../pages/productdetails";
import RegisterScreen from "../pages/regitser-screen";
import LoginScreen from "../pages/login-screen";
import { createContext, useState } from "react";

export const DataShare = createContext();

const NavigationStack = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({
        name: "sri",
        city: "hyderabad",
        isIndian: true,
        mobile: 56789023
    });

    const changeData = () => {
        setData({ ...data, name: "ram" });
    };

    const changeLogin = () => {
        setLogin(true);
    };

    return (
        <DataShare.Provider value={{ data, changeData, changeLogin }}>
            <BrowserRouter>
                <Routes>
                    {
                    !login ? (
                        <>
                         <Route path="/" Component={HomeScreen}/>  
                         <Route path="/about" Component={About}/>  
                         <Route path="/contacts" Component={ContactScreen}/>  
                         <Route path="setting" Component={Settings}/>  
                         <Route path="/register" Component={RegisterScreen}/>
                        </>
                    ) : (
                        <Route path="/" Component={LoginScreen}/>  
                    )}
                </Routes>
            </BrowserRouter>
        </DataShare.Provider>
    );
};

export default NavigationStack;
