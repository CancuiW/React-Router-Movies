import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovies(response.data)
          //console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
        <SavedList list={[]} />
        <Routes>
          <Route path='/' element={<MovieList  movies={movies}/>}/>
          <Route path='/movies/:id' element={<Movie movies={movies} />} />

        </Routes>
        

      
    </div>
  );
}
