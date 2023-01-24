import React from 'react';
import {Text, ImageSourcePropType} from 'react-native';

import {
  Left,
  Right,
  Divider,
  Status,
  Logo,
  Name,
  Value,
  Arrow,
  Wrapper,
  TitleView,
  ProfitNumber,
} from './styles';

type ItemProps = {
  crypto: {
    id: string;
    name: string;
    abr: string;
    price: number;
    logo: ImageSourcePropType;
    status: number;
  };
};

const Crypto = ({crypto}: ItemProps) => (
  <>
    <Wrapper>
      <Left>
        <Logo source={crypto.logo} />
        <TitleView>
          <Name>{crypto.name}</Name>
          <Text>{crypto.abr}</Text>
        </TitleView>
      </Left>

      <Right>
        <Value>${crypto.price}</Value>
        <Status>
          <Arrow
            source={
              crypto.status > 0
                ? require('../../assets/images/arrows/FlechaVerde.png')
                : require('../../assets/images/arrows/FlechaRoja.png')
            }
          />
          <ProfitNumber positive={crypto.status > 0}>
            {Math.abs(crypto.status)}%
          </ProfitNumber>
        </Status>
      </Right>
    </Wrapper>
    <Divider />
  </>
);

export default Crypto;
