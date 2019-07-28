import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.TouchableHighlight`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('52')};
`;

export const Poster = styled.ImageBackground`
  flex: 1;
`;

export const ViewInfo = styled.View`

`;
