import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #141414;
`;

export const Lable = styled.Text`
  font-size: 20;
  font-weight: bold;
  padding-left: ${widthPercentageToDp('2%')};
  margin-top: 20;
  color: #FFF;
`;
