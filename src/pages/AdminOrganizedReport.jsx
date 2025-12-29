
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminOrganizedReport() {
    const navigate = useNavigate();

    return (
        <div style={{
            padding: '16px',
            minHeight: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ flex: 1, overflowX: 'auto' }}>
                <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Organized Report Summary</h1>

                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#E0E0E0' }}>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Name of Farmer</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Location</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Farm Area</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Affected Area</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Crop Planted</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Crop Stage</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Cause of Loss</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Pest Type</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Proof</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Juan Dela Cruz</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Purok 1, San Jose</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>2.5 ha</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>1.0 ha</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Rice</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Vegetative</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Pest Infestation</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Rodents</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc', color: 'blue', textDecoration: 'underline' }}>View</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Pedro Penduko</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Purok 2, San Miguel</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>3.0 ha</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>3.0 ha</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Corn</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Flowering</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Flooding</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>N/A</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc', color: 'blue', textDecoration: 'underline' }}>View</td>
                        </tr>
                    </tbody>
                </table>

                <button
                    style={{
                        width: '100%',
                        maxWidth: '200px',
                        padding: '12px',
                        marginTop: '20px',
                        backgroundColor: '#2E7D32',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Download
                </button>
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
                    cursor: 'pointer',
                    marginTop: 'auto'
                }}
            >
                Home
            </button>
        </div>
    );
}
