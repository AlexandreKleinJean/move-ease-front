import React, {FunctionComponent} from 'react';
import { useNavigate } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
    const navigate = useNavigate();

    const goHome = () => {
      navigate(`/movie`);
    };
    
    return (
        <div className="container">
        <h1>Not found !</h1>
        <div className="card-action">
            <button onClick={goHome}>Home</button>
        </div>
        </div>
    );
};
  
export default PageNotFound;