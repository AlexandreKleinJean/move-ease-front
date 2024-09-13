import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';

type Props = {
  movie: Movie;
};

type Field = {
    value?: string,
    error?: string,
    isValid?: boolean;
  };

type Form = {
    description: Field,
    genre: Field;
  };
  

const MovieEditForm: FunctionComponent<Props> = ({movie}) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    description: {value: movie.description, isValid: true},
    genre: {value: movie.genre, isValid: true}
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid){
      movie.description = form.description.value || '';
      movie.genre = form.genre.value || '';
      MovieService.updateMovie(movie).then(()=> navigate(`/movie/${movie.id}`));
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: {value : fieldValue } }; 
    setForm({...form, ...newField})
  }

  const validateForm = () => {
    let newForm: Form = { ...form };
  
    const descriptionValue = form.description.value || "";
    if (!/^[a-zA-Z0-9À-ÖØ-öø-ÿ.,'!-? ]+$/.test(descriptionValue)) {
      const errorMsg: string = 'Description cannot contain this kind of character.';
      newForm = {
        ...newForm,
        description: { value: form.description.value, error: errorMsg, isValid: false }
      };
    } else {
      newForm = {
        ...newForm,
        description: { value: form.description.value, error: '', isValid: true }
      };
    }
  
    const genreValue = form.genre.value || "";
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(genreValue)) {
      const errorMsg: string = 'Genre must contain only letters (3-10 characters).';
      newForm = {
        ...newForm,
        genre: { value: form.genre.value, error: errorMsg, isValid: false }
      };
    } else {
      newForm = {
        ...newForm,
        genre: { value: form.genre.value, error: '', isValid: true }
      };
    }
  
    setForm(newForm);
    return newForm.description.isValid && newForm.genre.isValid;
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control materialize-textarea"
                  value={form.description.value}
                  onChange={e => handleInputChange(e)}
                />
              {form.description.error && 
                <div className="card-panel red accent-1">
                  {form.description.error}
                </div>
              }
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  id="genre"
                  type="text"
                  name="genre"
                  className="form-control"
                  value={form.genre.value}
                  onChange={e => handleInputChange(e)}
                />
              {form.genre.error && 
                <div className="card-panel red accent-1">
                 {form.genre.error}
                </div>
              }
              </div>
            </div>
            <div className="card-action">
              <button type="submit" className="btn teal">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MovieEditForm;
