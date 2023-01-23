import {View, Text, Image} from 'react-native';
import theme from '../../config/theme';
import styled from 'styled-components';

export const Wrapper = styled(View)`
  padding-horizontal: 16px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
export const Left = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const TitleView = styled(View)`
  margin-left: 7px;
`;
export const Name = styled(Text)`
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 600;
`;
export const Right = styled(View)`
  align-items: flex-end;
`;
export const Value = styled(Text)`
  font-weight: 600;
  font-size: 15px;
  color: ${theme.colors.white};
`;
export const Status = styled(View)`
  flex-direction: row;
`;
export const Arrow = styled(Image)`
  height: 10px;
  width: 10px;
  margin-right: 4px;
  margin-top: 6px;
`;
export const ProfitNumber = styled(Text)`
  color: ${({positive}: {positive: boolean}) => (positive ? 'green' : 'red')};
`;
export const Divider = styled(View)`
  border-bottom-color: ${theme.colors.lightGrey};
  border-bottom-width: 1px;
  margin-horizontal: 15px;
  margin-top: 15px;
`;
