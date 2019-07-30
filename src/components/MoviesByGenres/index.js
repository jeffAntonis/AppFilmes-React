import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import api from '~/services/api';
import config from '~/config';
import List from '~/components/List';

export default function MoviesByGenres(props) {
  const [requestSucess, setRequestSucess] = useState(false);
  const [genresMovie, setGenresMovie] = useState([]);
  

  useEffect(() => {
    setRequestSucess(false);
    setGenresMovie([]);
    getMoviesByGenres();
  }, []);

  function getMoviesByGenres(){
    api.get(`/genre/movie/list?api_key=${config.API_KEY}&language=pt`)
      .then(res => {
        prepareMovies(res.data.genres);
      })
      .catch(err => console.log(err));
  }

  function prepareMovies(data){
    Promise.all(data.map((genre, index) =>
      api.get(`/discover/movie?api_key=${config.API_KEY}&language=pt&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=${genre.id}`)
        .then(res => {
          genre.movies = res.data.results;           
          return genre;
        })
        .catch(err => console.log(err))
    ))
    .then(data => {
      // console.log(data);
      setGenresMovie(data);
    })
  }

  return (
    <>
      {
        (genresMovie.length > 0) &&
        genresMovie.map((row, index) => (          
          <List key={index} lable={row.name} data={row.movies} navigation={props.navigation} />
        ))
      }
    </>
  );
}
