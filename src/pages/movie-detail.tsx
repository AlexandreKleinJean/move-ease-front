import React, {FunctionComponent} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchMovieById from '../hooks/useFetchMovieById';

const MovieDetail: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const movie = useFetchMovieById(id!);

  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/movie`);
  };

  const goToEditPage = () => {
    navigate(`/movie/edit/${id}`, { state: { movie } });
  };

  if (!movie) {
    return <p>No movie with this id</p>;
  }

  return(
      <div className="col s6 m4">
          <div className="card" >
              <div className="horizontale">
                  <span className="card-title">{movie.title}</span>
              </div>
              <div className="card-content">
                  <p><strong>Director:</strong> {movie.director}</p>
                  <p><strong>Description:</strong> {movie.description}</p>
                  <p><strong>Country:</strong> {movie.country}</p>
                  <p><strong>Genre:</strong> {movie.genre}</p>
              </div>
              <div className="card-action">
                  <button onClick={goHome}>Home</button>
                  <button onClick={goToEditPage}>Edit</button>
              </div>
          </div>
      </div>
    )
}

export default MovieDetail;
