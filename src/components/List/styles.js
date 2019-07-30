import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  height: ${heightPercentageToDp('20%')}px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ListContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ListItem = styled.TouchableHighlight`
  width: ${widthPercentageToDp('25%')}px;
  height: ${heightPercentageToDp('20%')}px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 8px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Lable = styled.Text`
  font-size: 20;
  font-weight: bold;
  padding-left: ${widthPercentageToDp('2%')};
  margin-top: 20;
  color: #FFF;
`;