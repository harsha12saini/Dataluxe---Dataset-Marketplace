import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../authService"; // Your custom signup logic
import './SignUp.css';
import signInVideo from './images/signInVideo.mp4';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < minLength) {
            return `Password must be at least ${minLength} characters long.`;
        }
        if (!hasNumber.test(password)) {
            return "Password must contain at least one number.";
        }
        if (!hasSpecialChar.test(password)) {
            return "Password must contain at least one special character.";
        }
        return null;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setLoading(true);
        try {
            await signUp(email.trim(), password);
            navigate("/signup/redirect"); // Redirect to SubscriptionScreen after signup
        } catch (error) {
            console.error("Signup error:", error.message);
            setError(error.message || "An error occurred during signup.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSignup(e);
        }
    };

    return (
        <div className="signup-container">
        <div className = "video-container">
                 <video className="video" autoPlay muted loop>
                  <source src={signInVideo} type="video/mp4" />
                </video>
            <form onSubmit={handleSignup} className="signup-form">
            <h1 className="header">Create an Account</h1>
                <div className="input-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        aria-label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Create a strong password"
                            aria-label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                            onKeyDown={handleKeyDown}
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className="material-icons">
                                {showPassword ? 'visibility' : 'visibility_off'}
                            </i>
                        </span>
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <div className="password-container">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            aria-label="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="form-input"
                            onKeyDown={handleKeyDown}
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <i className="material-icons">
                                {showConfirmPassword ? 'visibility' : 'visibility_off'}
                            </i>
                        </span>
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button 
                    type="submit" 
                    className="signup-button" 
                    disabled={loading}
                >
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
        </div>
    );
};

export default SignUp;
