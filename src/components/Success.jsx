import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/"); // Redirect to the correct login route
    };

    return (
        <div className="SuccessContainer">
            <div className="SuccessCard">
                <img
                    className="SuccessLogo"
                    src="https://scontent.fsfs2-1.fna.fbcdn.net/v/t1.15752-9/483780891_1261422808255227_2314382041203204776_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfVdpQUTK6nV5RRqR0FB06yYSkaBANY47JhKRoEA1jjpTEi5fNS7a_a6myJfnXwY8SPcjROnbq-Zy1yG8J8FJX&_nc_ohc=Y_tlDlpMA6oQ7kNvgECiVNX&_nc_oc=Adkg9gkCEVVMeHEE27v4kOBTOVgJjcnj-CYrqwmuJS9YIZ1gEFCu_Ar87Hq0IZ09rao&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsfs2-1.fna&oh=03_Q7cD1wGYTHSurqvLotKtVCzJNTIp-c5L2SyKM1p-_bQHaJ-JcQ&oe=680CBDDE"
                    alt="Brgy360 Official Logo"
                />
                <h2 className="SuccessTitle">BRGY360</h2>
                <p className="SuccessMessage">SUCCESS!</p>
                <img
                    className="SuccessIcon"
                    src="https://img.icons8.com/?size=100&id=12402&format=png"
                    alt="Success Checkmark Icon"
                />
                <p className="SuccessMessage">
                    Congratulations! Your password has been successfully updated.
                    Click "Continue" to log in.
                </p>
                <button className="SuccessButton" onClick={handleContinue}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default Success;
