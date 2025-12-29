import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SignupAppInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const prevData = location.state || {}; // Actually this is the last step now

    // Merge previous data with local state if needed for final submission
    // But this component was originally Step 1.
    // We will treat it as "App Info" step.

    const [formData, setFormData] = useState({
        ...prevData,
        email: '',
        rsbsa: '',
        password: ''
    });

    const handleSignIn = () => {
        // Here we would typically submit 'formData' to the backend
        console.log("Submitting Full Registration Data:", formData);
        alert("Registration Successful!");
        navigate('/login');
    };

    const labelStyle = {
        fontWeight: 'bold',
        fontSize: '14px',
        marginBottom: '2px',
        display: 'block',
        textTransform: 'uppercase'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px 12px',
        marginBottom: '16px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#E0E0E0',
        fontSize: '14px'
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                backgroundColor: '#DCEDC8',
                padding: '20px',
                textAlign: 'center',
                borderBottom: '1px solid #C5E1A5'
            }}>
                <h1 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'black',
                    margin: 0
                }}>Sign Up – APP INFORMATION</h1>
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <label style={labelStyle}>E-MAIL:</label>
                <input
                    type="email"
                    style={inputStyle}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <label style={labelStyle}>RSBSA NO.:</label>
                <input
                    type="text"
                    style={inputStyle}
                    value={formData.rsbsa}
                    onChange={(e) => setFormData({ ...formData, rsbsa: e.target.value })}
                />

                <label style={labelStyle}>PASSWORD:</label>
                <input
                    type="password"
                    style={inputStyle}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button
                        onClick={handleSignIn}
                        style={{
                            backgroundColor: '#DCEDC8',
                            color: 'black',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '10px 40px',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                    >
                        SIGN-IN
                    </button>
                </div>
            </div>
        </div>
    );
}
