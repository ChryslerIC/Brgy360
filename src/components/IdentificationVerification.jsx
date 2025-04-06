import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../auth/authContext"; // ✅ FIXED: Import useAuth
import { storage, db } from "../config/firebase-config";

const IdentificationVerification = () => {
    const navigate = useNavigate();
    const { user } = useAuth(); // ✅ FIXED: Get user from AuthContext

    const [idType, setIdType] = useState("national-id");
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontPreview, setFrontPreview] = useState(null); // ✅ Added preview
    const [backPreview, setBackPreview] = useState(null); // ✅ Added preview
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e, side) => {
        const file = e.target.files[0];
        if (!file) return;

        if (side === "front") {
            setFrontImage(file);
            setFrontPreview(URL.createObjectURL(file)); // ✅ Show preview
        } else {
            setBackImage(file);
            setBackPreview(URL.createObjectURL(file)); // ✅ Show preview
        }
    };

    const handleUpload = async () => {
        if (!user || !frontImage || !backImage) {
            alert("Please select both front and back ID images.");
            return;
        }

        setLoading(true);
        try {
            const frontRef = ref(storage, `users/${user.uid}/id-front`);
            const backRef = ref(storage, `users/${user.uid}/id-back`);

            await uploadBytes(frontRef, frontImage);
            await uploadBytes(backRef, backImage);

            const frontUrl = await getDownloadURL(frontRef);
            const backUrl = await getDownloadURL(backRef);

            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                idType,
                idImages: {
                    front: frontUrl,
                    back: backUrl,
                },
            });

            navigate("/"); // ✅ Redirect to the next step
        } catch (err) {
            console.error("Upload failed:", err);
            alert("Failed to upload images. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="verification">
            {/* Dropdown for choosing ID */}
            <div className="form-elemnet-varints">
                <div className="form-elemnet-source">
                    <div className="label">
                        <div className="element-name">Choose your ID</div>
                    </div>
                    <select
                        className="dropdown"
                        value={idType}
                        onChange={(e) => setIdType(e.target.value)}
                    >
                        <option value="national-id">National ID</option>
                        <option value="drivers-license">Driver's License</option>
                        <option value="passport">Passport</option>
                        <option value="school-id">School ID</option>
                        <option value="voters-id">Voter's ID</option>
                    </select>
                </div>
            </div>

            {/* Front of ID */}
            <div className="rectangle-44">
                <div className="upload-container">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "front")}
                        style={{ display: "none" }}
                        id="front-upload"
                    />
                    <img
                        className="plus-icon"
                        src={frontPreview || "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/plus-circle-12.png"}
                        alt="Front of ID"
                        onClick={() => document.getElementById("front-upload").click()}
                        style={{ width: "100px", height: "100px", cursor: "pointer" }}
                    />
                    <div className="label-text">Front of ID</div>
                </div>
            </div>

            {/* Back of ID */}
            <div className="rectangle-45">
                <div className="upload-container">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "back")}
                        style={{ display: "none" }}
                        id="back-upload"
                    />
                    <img
                        className="plus-icon"
                        src={backPreview || "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/plus-circle-12.png"}
                        alt="Back of ID"
                        onClick={() => document.getElementById("back-upload").click()}
                        style={{ width: "100px", height: "100px", cursor: "pointer" }}
                    />
                    <div className="label-text">Back of ID</div>
                </div>
            </div>

            {/* Buttons for navigation */}
            <div className="frame-1321314484">
                <div className="button" onClick={() => navigate("/Creatingprofile")}>
                    <div className="button2">Back</div>
                </div>
                <div className="button3">
                    <div className="button4" onClick={() => navigate("/")}>Skip</div>
                </div>
                <div className="button3" onClick={handleUpload}>
                    <div className="button4">{loading ? "Uploading..." : "Submit"}</div>
                </div>
            </div>
        </div>
    );
};

export default IdentificationVerification;
