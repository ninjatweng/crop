import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth, API_URL } from '../context/AuthContext';

export default function PestReport() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        location: '',
        crop: '',
        pestType: '',
        severity: '',
        damage: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const payload = {
                type: 'pest',
                location: formData.location,
                details: {
                    crop: formData.crop,
                    pestType: formData.pestType,
                    severity: formData.severity,
                    damage: formData.damage,
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
            <Header title="Report Pest Issue" showBack onBack={() => navigate(-1)} />

            <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        label="Location/Farm Area"
                        placeholder="e.g. Purok 2, Rice Field"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                    />

                    <Input
                        label="Crop Planted"
                        placeholder="e.g. Rice (RC216)"
                        value={formData.crop}
                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    />

                    <Input
                        label="Type of Pest (if known)"
                        placeholder="e.g. Black Bug, Stem Borer"
                        value={formData.pestType}
                        onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                        required
                    />

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Severity Level</label>
                        <select
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                            value={formData.severity}
                            onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                        >
                            <option value="">Select Severity</option>
                            <option value="Low">Low (Minor visible damage)</option>
                            <option value="Medium">Medium (Noticeable patches)</option>
                            <option value="High">High (Widespread infestation)</option>
                            <option value="Critical">Critical (Total crop failure risk)</option>
                        </select>
                    </div>

                    <Input
                        label="Estimated Damage"
                        placeholder="e.g. 10% of field, 50 sacks"
                        value={formData.damage}
                        onChange={(e) => setFormData({ ...formData, damage: e.target.value })}
                    />

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description / Notes</label>
                        <textarea
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[100px]"
                            placeholder="Describe the situation..."
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
