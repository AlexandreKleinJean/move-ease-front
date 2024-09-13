import { useState, useEffect } from 'react';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';

const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
      MovieService.getMovies()
        .then(data => setMovies(data));
    }, []);
    console.log(movies)
  
    return movies ;
  };

export default useFetchMovies;
