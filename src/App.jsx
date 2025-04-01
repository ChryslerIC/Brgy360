import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/Forgotpassword";
import VerificationCode from "./components/VerificationCode"; // Import the new component
import ResetPassword from "./components/Resetpassword";
import Success from "./components/Success.jsx";
import Creatingprofile from "./components/Creatingprofile.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verification" element={<VerificationCode />} /> {/* New route */}
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/success" element={<Success />} />
                <Route path="/creatingprofile" element={<Creatingprofile />} />
            </Routes>
        </Router>
    );
}

export default App;