import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { parse, format } from 'date-fns';

import { Container, ViewPoster, Poster, Title, Description, Row, TxtVote, Text } from './styles';

import { requestDetailsMovie } from "~/store/modules/todo/actions";
import Header from '~/components/Header';

export default function Details({ navigation }) {
  const urlPoster = 'http://image.tmdb.org/t/p/w185';
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDetailsMovie(navigation.getParam('movieId', 0)));
  }, []);

  return (
    <Container>
      <Header type='return' navigation={navigation} />
      {
        (todo.details) &&    
        (
          <>
            <ViewPoster>
              <Poster source={{ uri: `${urlPoster}/${todo.details.backdrop_path}` }} />
            </ViewPoster>
            <Title>{todo.details.title}</Title>
            <Row>
              <TxtVote>{todo.details.vote_average} revelante</TxtVote>
              <Text>{format(parse(todo.details.release_date), 'YYYY')}</Text>
              <Text>{todo.details.runtime}m</Text>
            </Row>
            <Description>{todo.details.overview}</Description>
          </>
        )     
      }      
    </Container>
  );
}
