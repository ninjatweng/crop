import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Camera } from 'lucide-react';

export default function SignupBasicInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const prevData = location.state || {};

    const [formData, setFormData] = useState({
        ...prevData,
        lastName: '',
        firstName: '',
        middleName: '',
        farmerId: '',
        tribe: '',
        streetSitio: '',
        barangay: '',
        province: '',
        cellphone: '',
        sex: '',
        dobMonth: '',
        dobDay: '',
        dobYear: '',
        civilStatus: ''
    });

    const handleNext = () => {
        navigate('/signup/farm-info', { state: formData });
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
        marginBottom: '8px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#E0E0E0',
        fontSize: '14px'
    };

    const checkboxGroupStyle = {
        display: 'flex',
        gap: '16px',
        marginBottom: '12px',
        alignItems: 'center'
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
                }}>Sign Up – Basic Information</h1>
            </div>

            <div style={{ padding: '20px', flex: 1 }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '4px',
                        backgroundColor: 'white'
                    }}>
                        <User size={48} color="black" />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Add Photo</span>
                </div>

                <label style={labelStyle}>Last Name:</label>
                <input type="text" style={inputStyle} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />

                <label style={labelStyle}>First Name:</label>
                <input type="text" style={inputStyle} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />

                <label style={labelStyle}>Middle Name:</label>
                <input type="text" style={inputStyle} value={formData.middleName} onChange={(e) => setFormData({ ...formData, middleName: e.target.value })} />

                <label style={labelStyle}>Farmer ID #:</label>
                <input type="text" style={inputStyle} value={formData.farmerId} onChange={(e) => setFormData({ ...formData, farmerId: e.target.value })} />

                <label style={labelStyle}>Tribe:</label>
                <input type="text" style={inputStyle} value={formData.tribe} onChange={(e) => setFormData({ ...formData, tribe: e.target.value })} />

                <label style={labelStyle}>Street/Sitio:</label>
                <input type="text" style={inputStyle} value={formData.streetSitio} onChange={(e) => setFormData({ ...formData, streetSitio: e.target.value })} />

                <label style={labelStyle}>Barangay:</label>
                <input type="text" style={inputStyle} value={formData.barangay} onChange={(e) => setFormData({ ...formData, barangay: e.target.value })} />

                <label style={labelStyle}>Province:</label>
                <input type="text" style={inputStyle} value={formData.province} onChange={(e) => setFormData({ ...formData, province: e.target.value })} />

                <label style={labelStyle}>Cellphone #:</label>
                <input type="tel" style={inputStyle} value={formData.cellphone} onChange={(e) => setFormData({ ...formData, cellphone: e.target.value })} />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ ...labelStyle, marginRight: '10px', marginBottom: 0 }}>SEX:</label>
                    <div style={checkboxGroupStyle}>
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                            <input type="radio" name="sex" value="Male" checked={formData.sex === 'Male'} onChange={(e) => setFormData({ ...formData, sex: e.target.value })} style={{ marginRight: '4px' }} /> MALE
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                            <input type="radio" name="sex" value="Female" checked={formData.sex === 'Female'} onChange={(e) => setFormData({ ...formData, sex: e.target.value })} style={{ marginRight: '4px' }} /> FEMALE
                        </label>
                    </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label style={labelStyle}>DATE OF BIRTH:</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ flex: 1 }}>
                            <input type="text" placeholder="MM" style={{ ...inputStyle, textAlign: 'center' }} value={formData.dobMonth} onChange={(e) => setFormData({ ...formData, dobMonth: e.target.value })} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <input type="text" placeholder="DD" style={{ ...inputStyle, textAlign: 'center' }} value={formData.dobDay} onChange={(e) => setFormData({ ...formData, dobDay: e.target.value })} />
                        </div>
                        <div style={{ flex: 2 }}>
                            <input type="text" placeholder="YYYY" style={{ ...inputStyle, textAlign: 'center' }} value={formData.dobYear} onChange={(e) => setFormData({ ...formData, dobYear: e.target.value })} />
                        </div>
                    </div>
                </div>

                <label style={labelStyle}>CIVIL STATUS:</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['SINGLE', 'MARRIED', 'WIDOW/ER', 'SEPARATED'].map((status) => (
                        <label key={status} style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                            <input type="radio" name="civilStatus" value={status} checked={formData.civilStatus === status} onChange={(e) => setFormData({ ...formData, civilStatus: e.target.value })} style={{ marginRight: '4px' }} /> {status}
                        </label>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '24px' }}>
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
