import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Lable = styled.Text`
  font-size: 20;
  font-weight: bold;
  padding-left: ${widthPercentageToDp('2%')};
  margin-top: 20;
  color: #FFF;
`;