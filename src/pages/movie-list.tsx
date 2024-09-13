import React, {FunctionComponent} from 'react';
import MovieCard from '../components/movie-card';
import useFetchMovies from '../hooks/useFetchMovies';
import { useNavigate } from 'react-router-dom';
import MovieSearch from '../components/movie-search';
import { AuthService } from '../services/authService';
  
const MovieList: FunctionComponent = () => {
  const navigate = useNavigate();
  const goToCreateMovie = () => {
    navigate(`/movie/create`);
  };
  const logout = () => {
    AuthService.logout();
  };

  const movies = useFetchMovies();
    
  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="row">
        <MovieSearch/>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
      <button onClick={goToCreateMovie}>Add Movie</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
  
export default MovieList;