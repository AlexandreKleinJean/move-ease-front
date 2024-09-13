import React, { FunctionComponent } from 'react';
import { AuthService } from '../services/authService';

const Home: FunctionComponent = () => {
    const handleLogin = () => {
        AuthService.login();
    };

    return (
        <div className="container">
            <h1>Welcome to Move Ease</h1>
            <div className="card-action">
                <button onClick={handleLogin}>See movies</button>
            </div>
        </div>
    );
};

export default Home;
