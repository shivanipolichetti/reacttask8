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
                    {login ? (
                        <>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<ContactScreen />} />
                            <Route path="/setting" element={<Settings />} />
                            <Route path="/:brand/:productId" element={<ProductDetails />} />
                            <Route path="*" element={<InvalidScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                        </>
                    ) : (
                        <Route path="/" element={<LoginScreen />} />
                    )}
                </Routes>
            </BrowserRouter>
        </DataShare.Provider>
    );
};

export default NavigationStack;
