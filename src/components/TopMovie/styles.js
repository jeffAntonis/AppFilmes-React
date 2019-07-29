import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.TouchableHighlight`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('52')};
`;

export const Poster = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  flex: 1;
`;

export const ViewInfo = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('12')};
  margin-top: ${heightPercentageToDp('42')};
  background: blue;
`;
