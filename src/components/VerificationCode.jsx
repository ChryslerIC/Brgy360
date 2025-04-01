import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
    const navigate = useNavigate();

    const handleVerify = () => {
        navigate('/resetpassword'); // Redirects to Reset Password page
    };


    return (
        <div className="ForgotPasswordContainer"> {/* Reusing the same container for consistency */}
            <div className="ForgotPasswordCard"> {/* Reusing the same card style */}
                <img className="Brgy360logo"
                     src="https://scontent.fsfs2-1.fna.fbcdn.net/v/t1.15752-9/483780891_1261422808255227_2314382041203204776_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfVdpQUTK6nV5RRqR0FB06yYSkaBANY47JhKRoEA1jjpTEi5fNS7a_a6myJfnXwY8SPcjROnbq-Zy1yG8J8FJX&_nc_ohc=Y_tlDlpMA6oQ7kNvgECiVNX&_nc_oc=Adkg9gkCEVVMeHEE27v4kOBTOVgJjcnj-CYrqwmuJS9YIZ1gEFCu_Ar87Hq0IZ09rao&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsfs2-1.fna&oh=03_Q7cD1wGYTHSurqvLotKtVCzJNTIp-c5L2SyKM1p-_bQHaJ-JcQ&oe=680CBDDE"
                     alt="Brgy360 Logo"
                />
                <h1 className="forgotTitle">BRGY360</h1>
                <p className="forgotSubtitle">VERIFICATION CODE</p>
                <div className="inputContainer">
                    <input className="forgotInput" type="text" placeholder="ENTER CODE" />
                </div>
                <button className="forgotButton" onClick={handleVerify}>VERIFY</button>
            </div>
        </div>
    );
};

export default VerificationCode;
