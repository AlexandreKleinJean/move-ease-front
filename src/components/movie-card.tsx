import React, {FunctionComponent} from 'react';
import { Movie } from '../models/movies';
import './movie-card.css';
import getBackgroundColor from '../helpers/backGroundColor';
import { useNavigate } from 'react-router-dom';
  
type Props = {
    movie: Movie;
    borderColor?: string;
}

const MovieCard: FunctionComponent<Props> = ({movie, borderColor = '#009688'}) => {
    const backgroundColor = getBackgroundColor(movie.genre);
    const navigate = useNavigate();

    const getMovieDetail = () => {
      navigate(`/movie/${movie.id}`);
    };
    
    return (
        <div className="col s6 m4">
            <div className="card" style={{borderColor: borderColor}}>
                <div className="horizontale">
                    <span className="card-title">{movie.title}</span>
                </div>
                <div className="card-content">
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Country:</strong> {movie.country}</p>
                    <p style={{backgroundColor: backgroundColor}}><strong>Genre:</strong> {movie.genre}</p>
                </div>
                <div className="card-action">
                    <button onClick={getMovieDetail}>More Details</button>
                </div>
            </div>
        </div>
    );
}
  
export default MovieCard;