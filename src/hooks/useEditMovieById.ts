import { useState, useEffect } from 'react';
import { Movie } from '../models/movies';

const useFetchMovieById = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`https://localhost:8443/movie/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, [id]);

  return movie;
};

export default useFetchMovieById;
