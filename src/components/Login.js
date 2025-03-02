import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../authService";
import './Login.css';
import loginvideo from './images/login-video.mp4';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
            if (rememberMe) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            }
            navigate('/home'); 
        } catch (error) {
            console.error("Login failed:", error);
            if (error.response && error.response.status === 400) {
                setError('Email is required.');
            } else if (error.response && error.response.status === 500) {
                setError('An internal server error occurred.');
            } else {
                setError('An error occurred: ' + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            handleLogin(e); // Call handleLogin manually
        }
    };

    const handleForgotPasswordClick = () => {
        navigate("/forgot-password"); // Navigate to Forgot Password page
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="login-container">
        <div className = "video-container">
         <video className="video" autoPlay muted loop>
          <source src={loginvideo} type="video/mp4" />
        </video>
            <form onSubmit={handleLogin} className="login-form">
            <h1 className="header">Sign in</h1>
                <div className="input-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        aria-label="Email"
                        className="form-input"
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="password-container">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            aria-label="Password"
                            className="form-input"
                            onKeyDown={handleKeyDown} // Handle Enter key for this field
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            <i className="material-icons">
                                {showPassword ? 'visibility' : 'visibility_off'}
                            </i>
                        </span>
                    </div>
                </div>
                <div className="form-options">
                    <label className="remember-me">
                        <input 
                            type="checkbox" 
                            checked={rememberMe} 
                            onChange={handleRememberMeChange} 
                        />
                        Remember me
                    </label>
                    <button
                        type="button"
                        className="forgot-password-link"
                        onClick={handleForgotPasswordClick} // Handle Forgot Password click
                    >
                        Forgot password?
                    </button>
                </div>
                <button 
                    type="submit" 
                    className="login-button" 
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Sign in"} {/* Conditionally render button text */}
                </button>
                <p className="signup-link">
                    Don’t have an account? <a href="/signup">Sign up</a> {/* Changed from Link to anchor tag */}
                </p>
                {error && <p className="error-message">{error}</p>}
            </form>
            </div>
        </div>
    );
};

export default Login;