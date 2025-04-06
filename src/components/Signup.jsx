import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import {useAuth} from "../auth/authContext.jsx";
import validator from 'validator';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); // Hook to navigate between pages
    const {signUp, user} = useAuth();

    const isValidPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    const isValidEmail = (email) => {
        return validator.isEmail(email);
    };

    const handleSignup = async (e) => {
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


            if (!isValidPassword(password, confirmPassword)) {
                alert("Password doesn't match.");
                return;
            }

            await signUp(email, password);
            console.log(user);
            navigate("/creatingprofile");
        } catch (error) {
            alert(`Failed to create account: ${error}`);
        }
    };

    return (
        <div className="SignupContainer">
            <div className="SignupCard">
                <img
                    className="Brgy360logo"
                    src="https://scontent.fsfs2-1.fna.fbcdn.net/v/t1.15752-9/483780891_1261422808255227_2314382041203204776_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfVdpQUTK6nV5RRqR0FB06yYSkaBANY47JhKRoEA1jjpTEi5fNS7a_a6myJfnXwY8SPcjROnbq-Zy1yG8J8FJX&_nc_ohc=Y_tlDlpMA6oQ7kNvgECiVNX&_nc_oc=Adkg9gkCEVVMeHEE27v4kOBTOVgJjcnj-CYrqwmuJS9YIZ1gEFCu_Ar87Hq0IZ09rao&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsfs2-1.fna&oh=03_Q7cD1wGYTHSurqvLotKtVCzJNTIp-c5L2SyKM1p-_bQHaJ-JcQ&oe=680CBDDE"
                    alt="Brgy360 Logo"
                />
                <h1 className="signupTitle">BRGY360</h1>
                <div className="FormContainer">
                    <input className="inputField" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" />
                    <input className="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="ENTER PASSWORD" />
                    <input className="inputField" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="RE-ENTER PASSWORD" />
                    <button className="signupButton" onClick={handleSignup}>
                        SIGN UP
                    </button>
                </div>
                <p className="loginRedirect">Already have an Account? <Link to="/">Log in</Link></p>
            </div>
        </div>
    );
};

export default Signup;
