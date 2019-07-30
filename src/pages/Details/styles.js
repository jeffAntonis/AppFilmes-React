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

export const Poster = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 16;
  margin-left: ${widthPercentageToDp('3%')};
  color: #FFF;
`;

export const Row = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('5%')};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16;
`;

export const TxtVote = styled.Text`
  font-size: 18;
  font-weight: bold;  
  margin-left: ${widthPercentageToDp('3%')};
  color: green;
`;

export const Text = styled.Text`
  font-size: 15;
  margin-left: ${widthPercentageToDp('3%')};
  color: #FFF;
`;

export const Description = styled.Text`
  margin-left: ${widthPercentageToDp('3%')};
  margin-right: ${widthPercentageToDp('3%')};
  font-size: 15;
  color: #FFF;
`;
