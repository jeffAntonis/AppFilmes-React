import React, { useEffect } from 'react';
import Icon from "react-native-vector-icons/AntDesign";

import { Container, Left, Center, Right, Touch, TextTouch } from './styles';

export default function Header({ type = 'main', navigation }) {

  return (
    <Container>
      {
        (type == 'return') ?
        <>
          <Left style={{ alignItems: 'flex-start' }}>
            <Touch 
              onPress={() => navigation.goBack()}
            >
              <Icon name='arrowleft' size={22} color='#FFF' />
            </Touch>
          </Left>
          <Center />
          <Right />
        </>
        : 
        <>
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
        </>
      }
    </Container>
  );
}
