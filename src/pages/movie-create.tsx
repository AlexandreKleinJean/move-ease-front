import React, {FunctionComponent} from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCreateForm from '../components/movie-create-form';

const MovieCreate: FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/movie`);
  };

  return (
    <div className="col s6 m4">
      <MovieCreateForm />
      <button onClick={goHome} className="btn">Go Home</button>
    </div>
  );
};

export default MovieCreate;
