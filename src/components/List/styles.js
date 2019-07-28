import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  height: ${heightPercentageToDp('20%')}px;
  margin-top: 20px;
`;

export const ListContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ListItem = styled.View`
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