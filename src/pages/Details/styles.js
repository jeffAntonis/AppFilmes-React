import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #141414;
`;

export const ViewPoster = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('30%')};
`;

export const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #FFF;
`;

export const Description = styled.Text`
  font-size: 15;
  color: #FFF;
`;
