import React from 'react';
import {Text} from 'react-native';
import {CryptoType} from '../../types/crypto';
import {deleteCrypto} from '../../store/cryptoSlice';
import {AppDispatch} from '../../store';
import {useDispatch} from 'react-redux';
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

const Crypto = ({crypto}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Wrapper onLongPress={() => dispatch(deleteCrypto({id: crypto.id}))}>
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
          <Value>${crypto?.market_data?.price_usd?.toFixed(2)}</Value>
          <Status>
            <Arrow
              source={
                crypto?.market_data?.percent_change_usd_last_24_hours > 0
                  ? require('../../assets/images/arrows/GreenArrow.png')
                  : require('../../assets/images/arrows/RedArrow.png')
              }
            />
            <ProfitNumber
              positive={
                crypto?.market_data?.percent_change_usd_last_24_hours > 0
              }>
              {Math.abs(
                crypto?.market_data?.percent_change_usd_last_24_hours,
              ).toFixed(2)}
              %
            </ProfitNumber>
          </Status>
        </Right>
      </Wrapper>
      <Divider />
    </>
  );
};

export default Crypto;
