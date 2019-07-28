import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('8%')};
  flex-direction: row;
  justify-content: center;
  background: #141414;
`;

export const Left = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('8%')};
  justify-content: center;
  align-items: center;
`;

export const Center = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('8%')};
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('8%')};
  justify-content: center;
  align-items: center;
`;

export const Touch = styled.TouchableOpacity`
`;

export const TextTouch = styled.Text`
  color: #FFF;
  font-size: 15;
`;
