import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import Header from "../assets/header/Header.jsx";
import {useAuth} from "../auth/authContext.jsx";
import validator from "validator";


const Login = () => {
    const [isChecked, setIsChecked] = useState(false);
    const {login, user} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const isValidEmail = (email) => {
        return validator.isEmail(email);
    };

    const handleLogin = async (e) => {
        // Navigate to CreatingProfile after clicking Sign Up
        e.preventDefault();
        try{
            if (!email || !password) {
                alert("Please fill in both email and password.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Email address not valid.");
                return;
            }

            await login(email, password);
            navigate("/Home");
        } catch (error) {
            alert(`Failed to Login: ${error}`);
        }
    };

    return (
        <div className="LoginContainer">
            <div className="LoginCard">
                <img className="Brgy360logo" src="https://scontent.fsfs2-1.fna.fbcdn.net/v/t1.15752-9/483780891_1261422808255227_2314382041203204776_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfVdpQUTK6nV5RRqR0FB06yYSkaBANY47JhKRoEA1jjpTEi5fNS7a_a6myJfnXwY8SPcjROnbq-Zy1yG8J8FJX&_nc_ohc=Y_tlDlpMA6oQ7kNvgECiVNX&_nc_oc=Adkg9gkCEVVMeHEE27v4kOBTOVgJjcnj-CYrqwmuJS9YIZ1gEFCu_Ar87Hq0IZ09rao&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsfs2-1.fna&oh=03_Q7cD1wGYTHSurqvLotKtVCzJNTIp-c5L2SyKM1p-_bQHaJ-JcQ&oe=680CBDDE" />
                <h1 className="loginTitle">Brgy360</h1>
                <div className="Mother">
                    <div className="inputcontainer">
                        <input className="loginpassbuttons" type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL"/>
                        <input className="loginpassbuttons" type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="PASSWORD"/>

                        </div>
                    <div className="RMcontainer">
                        <div className="RememberMe">
                            <label className="customCheckbox">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                        </div>
                        <div className="forgetpassword">
                            <Link
                                to="/forgot-password"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "text-decoration 0.2s ease-in-out",
                                }}
                                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                            >
                                Forget Password?
                            </Link>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <button
                            className="buttonsLS"
                            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                            onMouseLeave={(e) => e.target.style.opacity = "1"}
                            onClick={handleLogin}
                        >
                            Log in
                        </button>
                        <Link to="/signup">
                            <button
                                className="buttonsLS"
                                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                                onMouseLeave={(e) => e.target.style.opacity = "1"}
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
