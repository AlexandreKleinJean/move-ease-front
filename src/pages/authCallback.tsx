import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/authService';

const AuthCallback: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AuthService.handleAuthCallback();
        navigate('/movie');
    }, [navigate]);

    return (
        <div>
            <p>Authentification réussie, redirection en cours...</p>
        </div>
    );
};

export default AuthCallback;
