import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';
 
const MovieSearch: FunctionComponent = () => {
  
  const [term, setTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);
 
    if(term.length <= 1) {
      setMovies([]);
      return;
    }
 
    MovieService.searchMovies(term).then(movies => setMovies(movies));
  }
  
  return (
    <div className="row"> 
    <div className="col s12 m6 offset-m3"> 
      <div className="card"> 
      <div className="card-content"> 
        <div className="input-field"> 
        <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="collection-item">
            {movie.title}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
  
export default MovieSearch;