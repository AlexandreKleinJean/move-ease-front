import { Tvseries } from "../models/tvseries";

const BASE_URL = 'https://localhost:8443';

export class TvSeriesService {

    static getAuthHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
    
        if (token) {
            return { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json' 
            };
        }
    
        return { 'Content-Type': 'application/json' };
    }

    static searchTvSeriesByTitle(title: string): Promise<Tvseries> {
        return fetch(`${BASE_URL}/tvseries?title=${title}`, {
            headers: this.getAuthHeaders(),
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to search movies:', error);
            return [];
        });
    }
}
