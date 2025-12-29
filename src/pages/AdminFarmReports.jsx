
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminFarmReports() {
    const navigate = useNavigate();


    const reports = [
        { id: 1, title: 'Farm Report A', date: '2023-10-27' },
        { id: 2, title: 'Farm Report B', date: '2023-10-28' },
        { id: 3, title: 'Farm Report C', date: '2023-10-29' },
    ];

    return (
        <div style={{
            padding: '16px',
            minHeight: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Farm Condition Report</h1>

            <div style={{ flex: 1, marginBottom: '16px' }}>
                <div style={{
                    padding: '12px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 'bold' }}>Juan Dela Cruz</span>
                        <span style={{ fontSize: '12px', color: '#757575' }}>10/27/2023</span>
                    </div>
                    <span style={{ fontSize: '14px' }}>Purok 1, San Jose</span>
                    <span style={{ color: '#D32F2F', fontWeight: 'bold', fontSize: '14px' }}>Major Pest Infestation</span>
                </div>

                <div style={{
                    padding: '12px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 'bold' }}>Pedro Penduko</span>
                        <span style={{ fontSize: '12px', color: '#757575' }}>10/28/2023</span>
                    </div>
                    <span style={{ fontSize: '14px' }}>Purok 2, San Miguel</span>
                    <span style={{ color: '#1976D2', fontWeight: 'bold', fontSize: '14px' }}>Severe Flooding</span>
                </div>
            </div>

            <button
                onClick={() => navigate('/admin-dashboard')}
                style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#E0E0E0',
                    color: 'black',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Home
            </button>
        </div>
    );
}
