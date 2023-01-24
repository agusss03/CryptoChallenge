import React from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import Crypto from './src/components/Crypto';
import {Container, Title, ImageApp, Space, BTNAddCrypto} from './styles';

const cryptos = [
  {
    id: '1',
    logo: require('./src/assets/images/bitcoin.jpg'),
    name: 'Bitcoin',
    abr: 'BTC',
    price: 7215.68,
    status: 1.82,
  },
  {
    id: '2',
    logo: require('./src/assets/images/et.png'),
    name: 'Ethereum',
    abr: 'ETH',
    price: 146.83,
    status: 1.46,
  },
  {
    id: '3',
    logo: require('./src/assets/images/xrp.png'),
    name: 'XRP',
    abr: 'XRP',
    price: 0.220568,
    status: -2.47,
  },
];

const App = () => (
  <>
    <SafeAreaView>
      <Container>
        <View>
          <Title> CryptoTracker Pro </Title>
        </View>
        <ImageApp source={require('./src/assets/images/Face.jpg')} />
      </Container>
      <Space />
      <View>
        <View>
          <FlatList
            data={cryptos}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <Crypto crypto={item} />}
          />
        </View>
        <TouchableOpacity>
          <BTNAddCrypto> + Add a Cryptocurrency </BTNAddCrypto>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </>
);

export default App;
