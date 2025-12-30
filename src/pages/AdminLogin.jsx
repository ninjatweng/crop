import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';

export default function AdminLogin() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(username, password);

        setLoading(false);
        if (result.success) {
            navigate('/admin-dashboard');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-8">
                    <img src={logo} alt="CropAid Logo" className="w-24 h-24 object-contain mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
                    <p className="text-gray-500 text-sm">Sign in to access the dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <Input
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter admin username"
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />

                    {error && (
                        <div className="bg-red-50 text-red-500 p-3 rounded text-sm text-center font-medium">
                            {error}
                        </div>
                    )}

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Authenticating...' : 'Login to Dashboard'}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/login" className="text-sm text-gray-500 hover:text-primary">
                        Return to Farmer Login
                    </a>
                </div>
            </div>
        </div>
    );
}
