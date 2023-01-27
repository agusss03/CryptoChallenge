import React from 'react';
import {Text} from 'react-native';
import {CryptoType} from '../../types/crypto';

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

interface Props {
  crypto: CryptoType;
}

const Crypto = ({crypto}: Props) => (
  <>
    <Wrapper>
      <Left>
        <Logo
          source={{
            uri: `https://messari.io/asset-images/${crypto.id}/128.png`,
          }}
        />
        <TitleView>
          <Name>{crypto.name}</Name>
          <Text>{crypto.symbol}</Text>
        </TitleView>
      </Left>

      <Right>
        <Value>${crypto.metrics.market_data.price_usd.toFixed(2)}</Value>
        <Status>
          <Arrow
            source={
              crypto.metrics.market_data.percent_change_usd_last_24_hours > 0
                ? require('../../assets/images/arrows/GreenArrow.png')
                : require('../../assets/images/arrows/RedArrow.png')
            }
          />
          <ProfitNumber
            positive={
              crypto.metrics.market_data.percent_change_usd_last_24_hours > 0
            }>
            {Math.abs(
              crypto.metrics.market_data.percent_change_usd_last_24_hours,
            ).toFixed(2)}
            %
          </ProfitNumber>
        </Status>
      </Right>
    </Wrapper>
    <Divider />
  </>
);

export default Crypto;
