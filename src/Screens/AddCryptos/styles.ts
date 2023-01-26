import {Text, View, TextInput} from 'react-native';
import theme from '../../config/theme';
import styled from 'styled-components';

export const BtnBackToList = styled(Text)`
  color: ${theme.colors.navyBlue};
  font-size: 15px;
`;

export const BtnView = styled(View)`
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Container = styled(View)`
  text-align: left;
  margin-left: 20px;
  flex-direction: column;
  align-content: space-between;
`;

export const AddCrypto = styled(Text)`
  font-size: 23px;
  color: ${theme.colors.black};
  margin-top: 150px;
  font-weight: bold;
`;

export const CryptoName = styled(TextInput)`
  border-width: 1px;
  margin-right: 20px;
  margin-top: 25px;
  border-radius: 3px;
  padding: 13px;
  font-size: 16px;
  border-color: ${({isFocused}: {isFocused: boolean}) =>
    isFocused ? theme.colors.darkerYellow : theme.colors.darkerGrey};};
`;

export const AddContainer = styled(View)`
  background-color: ${theme.colors.yellow};
  margin-top: 15px;
  border-radius: 5px;
  margin-left: 200px;
  margin-right: 25px;
  padding: 10px;
`;

export const AddText = styled(Text)`
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  color: ${({disabled}: {disabled: boolean}) =>
    disabled ? theme.colors.darkerYellow : theme.colors.navyBlue};
`;
