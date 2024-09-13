import { Movie } from '../models/movies';

const BASE_URL = 'https://localhost:8443';

export class MovieService {

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

    static searchMovies(term: string): Promise<Movie[]> {
        return fetch(`${BASE_URL}/movie/search/?q=${term}`, {
            headers: this.getAuthHeaders()
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to search movies:', error);
            return [];
        });
      }

    static getMovies(): Promise<Movie[]> {
        const headers = this.getAuthHeaders();
        console.log('Headers utilisés pour la requête:', headers);
        return fetch(`${BASE_URL}/movie`, {
            headers: this.getAuthHeaders()
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to get all movies:', error);
            return [];
        });
      }

    static getMovieById(id: string): Promise<Movie> {
        return fetch(`${BASE_URL}/movie/${id}`, {
            headers: this.getAuthHeaders()
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to get movie by id:', error);
            return null;
        });
    }

    static updateMovie(movie: Movie): Promise<Movie> {
        return fetch(`${BASE_URL}/movie/${movie.id}`,{
            method: 'PUT',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(movie)
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to update movie:', error);
            return null;
        });
    }

    static createMovie(movie: Movie): Promise<Movie> {
        return fetch(`${BASE_URL}/movie`,{
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(movie)
        })
        .then(response => { return response.json() })
        .catch(error => {
            console.error('Front failed to create movie:', error);
            return null;
        });
    }

    static deleteMovie(id: string): Promise<boolean> {
        return fetch(`${BASE_URL}/movie/${id}`, {
            method: 'DELETE',
            headers: this.getAuthHeaders()
        })
        .then(response => { 
            if (response.status === 204) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => {
            console.error('Front failed to delete movie:', error)
            return false;
        });
    }
}
