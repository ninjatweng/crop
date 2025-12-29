import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SignupFarmInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const prevData = location.state || {};

    const [formData, setFormData] = useState({
        ...prevData,
        sitio: '',
        barangay: '',
        municipality: '',
        province: '',
        boundaryNorth: '',
        boundarySouth: '',
        boundaryEast: '',
        boundaryWest: '',
        isConfirmed: false
    });

    const handleNext = () => {
        if (!formData.isConfirmed) {
            alert("Please confirm the information is true and correct.");
            return;
        }
        navigate('/signup/app-info', { state: formData });
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
        marginBottom: '10px',
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
                }}>Sign Up – FARM</h1>
            </div>

            <div style={{ padding: '20px', flex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>FARM LOCATION</h2>
                </div>

                <label style={labelStyle}>SITIO/PUROK:</label>
                <input type="text" style={inputStyle} value={formData.sitio} onChange={(e) => setFormData({ ...formData, sitio: e.target.value })} />

                <label style={labelStyle}>BARANGAY:</label>
                <input type="text" style={inputStyle} value={formData.barangay} onChange={(e) => setFormData({ ...formData, barangay: e.target.value })} />

                <label style={labelStyle}>MUNICIPALITY:</label>
                <input type="text" style={inputStyle} value={formData.municipality} onChange={(e) => setFormData({ ...formData, municipality: e.target.value })} />

                <label style={labelStyle}>PROVINCE:</label>
                <input type="text" style={inputStyle} value={formData.province} onChange={(e) => setFormData({ ...formData, province: e.target.value })} />

                <div style={{ textAlign: 'center', marginBottom: '16px', marginTop: '16px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>BOUNDARIES</h2>
                </div>

                <label style={labelStyle}>NORTH:</label>
                <input type="text" style={inputStyle} value={formData.boundaryNorth} onChange={(e) => setFormData({ ...formData, boundaryNorth: e.target.value })} />

                <label style={labelStyle}>SOUTH:</label>
                <input type="text" style={inputStyle} value={formData.boundarySouth} onChange={(e) => setFormData({ ...formData, boundarySouth: e.target.value })} />

                <label style={labelStyle}>EAST:</label>
                <input type="text" style={inputStyle} value={formData.boundaryEast} onChange={(e) => setFormData({ ...formData, boundaryEast: e.target.value })} />

                <label style={labelStyle}>WEST:</label>
                <input type="text" style={inputStyle} value={formData.boundaryWest} onChange={(e) => setFormData({ ...formData, boundaryWest: e.target.value })} />

                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px', marginTop: '20px' }}>
                    <input
                        type="checkbox"
                        checked={formData.isConfirmed}
                        onChange={(e) => setFormData({ ...formData, isConfirmed: e.target.checked })}
                        style={{ width: '24px', height: '24px', marginRight: '10px', marginTop: '0px' }}
                    />
                    <label style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '1.2' }}>
                        I hereby certify that the above information are true and correct to the best of my knowledge.
                    </label>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={handleNext}
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
                        NEXT
                    </button>
                </div>
            </div>
        </div>
    );
}
