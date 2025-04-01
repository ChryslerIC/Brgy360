// Creatingprofile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Creatingprofile = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
        dateOfBirth: "",
        placeOfBirth: "",
        street: "",
        barangay: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add logic to proceed to the next step
    };

    return (
        <div className="FormContainer">
            <div className="FormCard">
                <div className="Mother">
                    <div className="ProfileContainer">
                        <div className="ProfilePicture">
                            <img
                                className="ProfileImage"
                                src="https://via.placeholder.com/100" // Placeholder image; replace with actual image
                                alt="Profile"
                            />
                            <span className="EditIcon">✏️</span>
                        </div>
                    </div>

                    <div className="InputContainer">
                        <div className="Row">
                            <div className="InputGroup">
                                <input
                                    className="FormInput"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="NAME * (FN, M.I., LN)"
                                    required
                                />
                            </div>
                            <div className="InputGroup Small">
                                <input
                                    className="FormInput"
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="AGE *"
                                    required
                                />
                            </div>
                            <div className="InputGroup Small">
                                <input
                                    className="FormInput"
                                    type="text"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                    placeholder="SEX *"
                                    required
                                />
                            </div>
                        </div>

                        <div className="Row">
                            <div className="InputGroup">
                                <input
                                    className="FormInput"
                                    type="text"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    placeholder="DATE OF BIRTH * (MM/DD/YYYY)"
                                    required
                                />
                            </div>
                            <div className="InputGroup">
                                <input
                                    className="FormInput"
                                    type="text"
                                    name="placeOfBirth"
                                    value={formData.placeOfBirth}
                                    onChange={handleChange}
                                    placeholder="PLACE OF BIRTH *"
                                    required
                                />
                            </div>
                        </div>

                        <div className="Row">
                            <div className="InputGroup">
                                <input
                                    className="FormInput"
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    placeholder="STREET NO. AND NAME *"
                                    required
                                />
                            </div>
                            <div className="InputGroup">
                                <select
                                    className="FormInput"
                                    name="barangay"
                                    value={formData.barangay}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        BARANGAY *
                                    </option>
                                    <option value="Barangay 1">Barangay 1</option>
                                    <option value="Barangay 2">Barangay 2</option>
                                    {/* Add more barangay options as needed */}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="ButtonContainer">
                        <Link to="/next-step">
                            <button
                                className="ButtonsNext"
                                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                                onMouseLeave={(e) => (e.target.style.opacity = "1")}
                            >
                                NEXT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creatingprofile;