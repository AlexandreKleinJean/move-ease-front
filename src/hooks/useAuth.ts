import { useState, useEffect } from 'react';
import { AuthService } from '../services/authService';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AuthService.isAuthenticated());

    // Vérifie si l'utilisateur est déjà authentifié
    useEffect(() => {
        setIsAuthenticated(AuthService.isAuthenticated());
    }, []);

    // Fonction pour démarrer la connexion
    const login = () => {
        AuthService.login();
    };

    // Fonction pour gérer le retour d'authentification
    const handleAuthCallback = () => {
        AuthService.handleAuthCallback();
        setIsAuthenticated(true);
    };

    // Fonction de déconnexion
    const logout = () => {
        AuthService.logout();
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        login,
        handleAuthCallback,
        logout,
    };
};
