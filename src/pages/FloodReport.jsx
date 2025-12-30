import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth, API_URL } from '../context/AuthContext';

export default function FloodReport() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        location: '',
        farmArea: '',
        affectedArea: '',
        crop: '',
        cropStage: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const payload = {
                type: 'flood',
                location: formData.location,
                details: {
                    farmArea: formData.farmArea,
                    affectedArea: formData.affectedArea,
                    crop: formData.crop,
                    cropStage: formData.cropStage,
                    severity: 'High', // Default for flood or calculate based on area
                    description: formData.description
                }
            };

            const response = await fetch(`${API_URL}/reports`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Failed to submit report');
            }

            navigate('/report-confirmation');
        } catch (err) {
            console.error(err);
            setError(err.message || 'Error submitting report');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <Header title="Report Flood Damage" showBack onBack={() => navigate(-1)} />

            <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        label="Location/Farm Area"
                        placeholder="e.g. Purok 5, Lowland Field"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                    />

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <Input
                                label="Total Farm Area (ha)"
                                type="number"
                                placeholder="0.0"
                                value={formData.farmArea}
                                onChange={(e) => setFormData({ ...formData, farmArea: e.target.value })}
                            />
                        </div>
                        <div className="flex-1">
                            <Input
                                label="Affected Area (ha)"
                                type="number"
                                placeholder="0.0"
                                value={formData.affectedArea}
                                onChange={(e) => setFormData({ ...formData, affectedArea: e.target.value })}
                            />
                        </div>
                    </div>

                    <Input
                        label="Crop Planted"
                        placeholder="e.g. Rice (RC216)"
                        value={formData.crop}
                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    />

                    <Input
                        label="Crop Stage"
                        placeholder="e.g. Vegetative, Flowering"
                        value={formData.cropStage}
                        onChange={(e) => setFormData({ ...formData, cropStage: e.target.value })}
                    />

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description / Notes</label>
                        <textarea
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[100px]"
                            placeholder="Describe the flood extent and damage..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                </form>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-20">
                {error && <div className="text-red-500 text-xs text-center mb-2 font-bold">{error}</div>}
                <div className="flex gap-3">
                    <Button
                        variant="secondary"
                        onClick={() => navigate(-1)}
                        className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-none border-none py-3"
                    >
                        CANCEL
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-[2] py-3 text-base shadow-none"
                    >
                        {loading ? 'SUBMITTING...' : 'SUBMIT REPORT'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
