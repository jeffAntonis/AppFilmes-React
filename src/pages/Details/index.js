import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Container, ViewPoster, Poster, Title, Description } from './styles';

import { requestDetailsMovie } from "~/store/modules/todo/actions";

export default function Details({ navigation }) {
  const urlPoster = 'http://image.tmdb.org/t/p/w185';
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDetailsMovie(navigation.getParam('movieId', 0)));
  }, []);

  return (
    <Container>
      {
        (todo.details) &&       
        (
          <>
            <ViewPoster>
              <Poster source={{ uri: `${urlPoster}/${todo.details.backdrop_path}` }} />
            </ViewPoster>
            <Title>{todo.details.title}</Title>
            <Description>{todo.details.overview}</Description>
          </>
        )     
      }      
    </Container>
  );
}
