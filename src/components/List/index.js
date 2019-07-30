import React, { useEffect } from 'react';

import { Container, ListContainer, ListItem, Poster, Lable } from './styles';

export default function List({ data, lable, navigation }) {  
  const urlPoster = 'http://image.tmdb.org/t/p/w185';

  return (
    <>
      <Lable>{lable}</Lable>
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
    </>
  );
}
