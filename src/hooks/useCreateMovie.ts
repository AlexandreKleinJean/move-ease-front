import { useState, useEffect } from 'react';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';

const useCreateMovie = (movie: Movie) => {
  const [createdMovie, setCreatedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!movie) return;

    MovieService.createMovie(movie)
      .then(data => setCreatedMovie(data))
  }, [movie]);

  return createdMovie;
};

export default useCreateMovie;
