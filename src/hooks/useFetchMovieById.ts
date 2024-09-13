import { useState, useEffect } from 'react';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';

const useFetchMovieById = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {

    MovieService.getMovieById(id)
      .then(data => setMovie(data));
  }, [id]);

  return movie;
};

export default useFetchMovieById;
