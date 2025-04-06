import React, { useState } from "react";

import {useAuth} from "../auth/authContext.jsx";
import { useNavigate } from "react-router-dom";

const Creatingprofile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
        dateOfBirth: "",
        placeOfBirth: "",
        street: "",
        barangay: "",
    });

    const {user, saveUserProfile} = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        const { name, age, sex, dateOfBirth, placeOfBirth, street, barangay } = formData;
        const dob = new Date(dateOfBirth);
        const today = new Date();

        try{
            e.preventDefault();

            if (!name || !age || !sex || !dateOfBirth || !placeOfBirth || !street || !barangay) {
                alert("Please fill in all required fields.");
                return;
            }

            if (dob > today) {
                alert("Date of birth cannot be in the future.");
                return;
            }


            await saveUserProfile(user.uid, formData);
            navigate("/identification-verification"); // Navigate to IdentificationVerification component
        } catch (error) {
            console.error("Failed to save profile:", error);
        }
    };


    return (
        <div className="container">
            {/* Profile Section */}
            <div className="profile-container">
                <div className="profile-image-wrapper">
                    <img
                        className="profile-icon"
                        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                        alt="Profile Icon"
                    />
                </div>
                <button className="edit-icon">✎</button>
            </div>

            {/* Card with Form */}
            <div className="profile-card">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label>Name <span>*</span> <small>(FN, M.I., LN)</small></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Age <span>*</span></label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </div>

                    {/* Sex Dropdown */}
                    <div className="form-group">
                        <label>Sex <span>*</span></label>
                        <select name="sex" value={formData.sex} onChange={handleChange} required>
                            <option value="" disabled>Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    {/* Date of Birth Date Picker */}
                    <div className="form-group">
                        <label>Date of Birth <span>*</span> <small>(MM/DD/YYYY)</small></label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Place of Birth <span>*</span></label>
                        <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Street No. and Name <span>*</span></label>
                        <input type="text" name="street" value={formData.street} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Barangay <span>*</span></label>
                        <select name="barangay" value={formData.barangay} onChange={handleChange} required>
                            <option value="" disabled>Select Barangay</option>
                            <option value="Asinan">Asinan</option>
                            <option value="Banicain">Banicain</option>
                            <option value="Barretto">Barretto</option>
                            <option value="East Bajac-bajac">East Bajac-bajac</option>
                            <option value="East Tapinac">East Tapinac</option>
                            <option value="Gordon Heights">Gordon Heights</option>
                            <option value="Kalaklan">Kalaklan</option>
                            <option value="Mabayuan">Mabayuan</option>
                            <option value="New Cabalan">New Cabalan</option>
                            <option value="New Kalalake">New Kalalake</option>
                            <option value="Old Cabalan">Old Cabalan</option>
                            <option value="Pag-asa">Pag-asa</option>
                            <option value="Santa Rita">Sta. Rita</option>
                            <option value="West Bajac-bajac">West Bajac-bajac</option>
                            <option value="West Tapinac">West Tapinac</option>
                            <option value="New Ilalim">New Ilalim</option>
                            <option value="New Kababae">New Kababae</option>
                        </select>
                    </div>

                    <div className="button-container">
                        <button type="submit" className="next-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Creatingprofile;
