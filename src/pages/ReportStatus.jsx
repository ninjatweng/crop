import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useAuth, API_URL } from '../context/AuthContext';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ReportStatus() {
    const { token } = useAuth();
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch(`${API_URL}/reports/history`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (!response.ok) throw new Error('Failed to fetch reports');

                const data = await response.json();
                setReports(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load report history');
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchReports();
    }, [token]);

    const getStatusInfo = (status) => {
        switch (status) {
            case 'pending':
                return { color: 'text-amber-500 bg-amber-50 border-amber-100', icon: Clock, label: 'Pending Review' };
            case 'verified':
                return { color: 'text-blue-500 bg-blue-50 border-blue-100', icon: CheckCircle, label: 'Verified' };
            case 'resolved':
                return { color: 'text-emerald-500 bg-emerald-50 border-emerald-100', icon: CheckCircle, label: 'Resolved' };
            default:
                return { color: 'text-gray-500 bg-gray-50 border-gray-100', icon: AlertCircle, label: status };
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <Header title="My Reports" />

            <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
                {loading && <div className="text-center py-8 text-gray-400">Loading history...</div>}

                {error && (
                    <div className="bg-red-50 text-red-500 p-4 rounded-md text-center text-sm mb-4">
                        {error}
                    </div>
                )}

                {!loading && !error && reports.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                        <p className="mb-2">No reports submitted yet.</p>
                    </div>
                )}

                <div className="space-y-3">
                    {reports.map((report) => {
                        const style = getStatusInfo(report.status);
                        const details = typeof report.details === 'string' ? JSON.parse(report.details) : report.details;

                        return (
                            <div key={report.id} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-gray-900 capitalize text-base">{report.type} Report</h3>
                                        <p className="text-xs text-gray-400">{formatDate(report.created_at)}</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 border ${style.color}`}>
                                        <style.icon size={12} />
                                        {style.label}
                                    </span>
                                </div>

                                <div className="text-sm text-gray-600 mb-2">
                                    <p><span className="font-bold text-gray-400 text-xs uppercase">Location:</span> {report.location}</p>
                                    {details.crop && <p><span className="font-bold text-gray-400 text-xs uppercase">Crop:</span> {details.crop}</p>}
                                </div>

                                {details.description && (
                                    <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded italic">
                                        "{details.description}"
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
