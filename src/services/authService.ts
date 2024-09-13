export class AuthService {
    static clientId: string = '9456972959-e40npvfni26ur4b2qr9uvhm7h0nbvehv.apps.googleusercontent.com';
    static redirectUri: string = 'http://localhost:3000/callback';
    static authUrl: string = 'https://accounts.google.com/o/oauth2/auth';
    static logoutGoogle: string = 'https://accounts.google.com/Logout';

    static login() {
        console.log("Login button clicked");
        const url = `${this.authUrl}?response_type=token&client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=email`;
        window.location.href = url;
    }

    static handleAuthCallback() {
        const hash = new URL(window.location.href).hash;
        let token = null;
    
        if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            token = params.get('access_token');
    
            if (token) {
                localStorage.setItem('accessToken', token);
            } 
        }
    }

    static isAuthenticated(): boolean {
        return !!localStorage.getItem('accessToken');
    }

    static logout() {
        localStorage.removeItem('accessToken');
        const googleLogoutWindow = window.open(this.logoutGoogle);
        setTimeout(() => {
            if (googleLogoutWindow) {
                googleLogoutWindow.close();
            }
            window.location.href = '/';
        }, 50);
    }
}