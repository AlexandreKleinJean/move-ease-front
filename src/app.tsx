import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './pages/movie-list';
import MovieDetail from './pages/movie-detail';
import PageNotFound from './pages/page-not-found';
import MovieEdit from './pages/movie-edit';
import MovieCreate from './pages/movie-create';
import AuthCallback from './pages/authCallback';
import Home from './pages/home';
import PrivateRoute from './privateRoute';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Move ease</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<PrivateRoute component={MovieList} />} />
          <Route path="/movie/:id" element={<PrivateRoute component={MovieDetail} />} />
          <Route path="/movie/edit/:id" element={<PrivateRoute component={MovieEdit} />} />
          <Route path="/movie/create" element={<PrivateRoute component={MovieCreate} />} />
          <Route path="/callback" element={<AuthCallback />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
