import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movieService';

type Field = {
    value?: string,
    error?: string,
    isValid?: boolean;
  };

type Form = {
    title: Field,
    description: Field,
    director: Field,
    country: Field,
    genre: Field;
  };
  

const MovieCreateForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    title: {value: '', isValid: true},
    description: {value: '', isValid: true},
    director: {value: '', isValid: true},
    country: {value: '', isValid: true},
    genre: {value: '', isValid: true}
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
        const newMovie: Movie = {
            title: form.title.value || '',
            description: form.description.value || '',
            director: form.director.value || '',
            country: form.country.value || '',
            genre: form.genre.value || ''
        };
        MovieService.createMovie(newMovie).then(()=> navigate(`/movie`));
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

    const titleValue = form.title.value || "";
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(titleValue)) {
      const errorMsg: string = 'Title must contain only letters (3-10 characters).';
      newForm = {
        ...newForm,
        title: { value: form.title.value, error: errorMsg, isValid: false }
      };
    } else {
      newForm = {
        ...newForm,
        title: { value: form.title.value, error: '', isValid: true }
      };
    }
  
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

    const directorValue = form.director.value || "";
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(directorValue)) {
      const errorMsg: string = 'Director must contain only letters (3-10 characters).';
      newForm = {
        ...newForm,
        director: { value: form.director.value, error: errorMsg, isValid: false }
      };
    } else {
      newForm = {
        ...newForm,
        director: { value: form.director.value, error: '', isValid: true }
      };
    }

    const countryValue = form.country.value || "";
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(countryValue)) {
      const errorMsg: string = 'Country must contain only letters (3-10 characters).';
      newForm = {
        ...newForm,
        country: { value: form.country.value, error: errorMsg, isValid: false }
      };
    } else {
      newForm = {
        ...newForm,
        country: { value: form.country.value, error: '', isValid: true }
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
    return newForm.title.isValid 
        && newForm.description.isValid
        && newForm.director.isValid
        && newForm.country.isValid
        && newForm.genre.isValid;
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    className="form-control"
                    value={form.title.value}
                    onChange={e => handleInputChange(e)}
                />
                {form.title.error && 
                    <div className="card-panel red accent-1">
                    {form.title.error}
                    </div>
                }
              </div>
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
                <label htmlFor="director">Director</label>
                <input
                  id="director"
                  type="text"
                  name="director"
                  className="form-control"
                  value={form.director.value}
                  onChange={e => handleInputChange(e)}
                />
              {form.director.error && 
                <div className="card-panel red accent-1">
                 {form.director.error}
                </div>
              }
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  className="form-control"
                  value={form.country.value}
                  onChange={e => handleInputChange(e)}
                />
              {form.country.error && 
                <div className="card-panel red accent-1">
                 {form.country.error}
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
              <button type="submit" className="btn teal">Create movie</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MovieCreateForm;
