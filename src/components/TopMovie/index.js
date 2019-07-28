import React from 'react';

import { Container, Poster } from './styles';

export default function TopMovie({ data, navigation }) {
  const urlPoster = 'http://image.tmdb.org/t/p/w185';

  return (
    <Container
      onPress={() => navigation.navigate('Details', { movieId: data[0].id })}
    >
      <Poster
        source={{ uri: `${urlPoster}/${data[0].poster_path}` }}        
      >
      </Poster>
    </Container>
  );
}
