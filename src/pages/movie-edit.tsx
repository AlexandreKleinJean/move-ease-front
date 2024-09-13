import React, {FunctionComponent} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieEditForm from '../components/movie-edit-form';
import useFetchMovieById from '../hooks/useFetchMovieById';

const MovieEdit: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const movie = useFetchMovieById(id!);
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/movie`);
  };

  if (!movie) {
    return <p>No movie data found.</p>;
  }

  return (
    <div className="col s6 m4">
      <MovieEditForm movie={movie} />
      <button onClick={goHome} className="btn">Go Home</button>
    </div>
  );
};

export default MovieEdit;
