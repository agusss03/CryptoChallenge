import {View, Text, Image} from 'react-native';
import theme from '../../config/theme';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: ${theme.colors.navyBlue};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-color: ${theme.colors.black};
`;

export const Title = styled(Text)`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
`;

export const ImageApp = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Space = styled(View)`
  margin-top: 15px;
`;

export const BTNAddCrypto = styled(Text)`
  text-align: center;
  margin-top: 50px;
  font-size: 15px;
  color: ${theme.colors.navyBlue};
`;
