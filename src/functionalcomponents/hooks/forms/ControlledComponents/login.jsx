import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(false);
    const [formsErr, setFormsErr] = useState({
        username: null,
        password: null
    });
    const [forms, setForms] = useState({
        username: "",
        password: ""
    });

    const changerHandler = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setForms((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const changerLogin = (event) => {
        event.preventDefault();
        const { username, password } = forms;
        const userDetails = {
            username: username,
            password: password,
            expiresInMins: "30"
        };
        loginHitApi(userDetails)
            .then((result) => {
                if (result && result.data) {
                    setLogin(true);
                    setData(result.data);
                    alert(`Welcome ${result.data.username}`);
                } else {
                    setLogin(false);
                    alert("Invalid credentials");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setLogin(false);
                alert("Invalid credentials");
            });
    };

    const loginHitApi = (userInfo) => {
        return axios.post(
            'https://dummyjson.com/auth/login',
            userInfo,
            { headers: { 'Content-Type': 'application/json' } }
        );
    };

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={changerLogin}>
                <label>UserName</label>
                <input
                    type="text"
                    value={forms.username}
                    name="username"
                    onChange={changerHandler}
                />
                {formsErr.username && <span style={{ color: "red" }}>Invalid Username</span>}
                <label>Password</label>
                <input
                    type="password"
                    value={forms.password}
                    name="password"
                    onChange={changerHandler}
                />
                {formsErr.password && <span style={{ color: "red" }}>Invalid Password</span>}
                <button type="submit">Submit</button>
                {login ? (
                    <h3 style={{color:"red"}}>Welcome {data && data.username}</h3>
                ) : (
                    <h3 style={{color:"red"}}>Invalid credentials</h3>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
