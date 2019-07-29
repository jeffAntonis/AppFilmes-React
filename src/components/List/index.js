import React, { useEffect } from 'react';

import { Container, ListContainer, ListItem, Poster } from './styles';

export default function List({ data, navigation }) {  
  const urlPoster = 'http://image.tmdb.org/t/p/w185';

  return (
    <Container>
      <ListContainer>
        {data.map((movie, index) => {
          if(index > 0){
            return (
              <ListItem 
                key={index}
                onPress={() => navigation.navigate('Details', { movieId: movie.id })}
              >
                <Poster source={{ uri: `${urlPoster}/${movie.poster_path}` }} />
              </ListItem>
            )
          }
        })}
      </ListContainer>
    </Container>
  );
}
