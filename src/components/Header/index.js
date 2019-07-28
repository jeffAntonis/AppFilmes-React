import React from 'react';

import { Container, Left, Center, Right, Touch, TextTouch } from './styles';

export default function Header() {
  return (
    <Container>
      <Left>
        <Touch>
          <TextTouch>Séries</TextTouch>
        </Touch>
      </Left>
      <Center>
        <Touch>
          <TextTouch>Filmes</TextTouch>
        </Touch>
      </Center>
      <Right>
        <Touch>
          <TextTouch>Minha Lista</TextTouch>
        </Touch>
      </Right>
    </Container>
  );
}
