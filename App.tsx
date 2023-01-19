import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Item from './Cryptos';
const cryptos = [
  {
    id: '1',
    logo: require('./src/components/images/flecha/bitcoin.jpg'),
    name: 'Bitcoin',
    abr: 'BTC',
    price: 7215.68,
    status: 1.82,
  },
  {
    id: '2',
    logo: require('./src/components/images/flecha/ethereum.png'),
    name: 'Ethereum',
    abr: 'ETH',
    price: 146.83,
    status: 1.46,
  },
  {
    id: '3',
    logo: require('./src/components/images/flecha/xrp.png'),
    name: 'XRP',
    abr: 'XRP',
    price: 0.220568,
    status: -2.47,
  },
];

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.textoCrypto}> CryptoTracker Pro </Text>
          </View>
          <Image
            source={require('./assets/images/cara.jpg')}
            style={styles.imagen}
          />
        </View>
        <View style={styles.espacio} />
        <View>
          <View>
            <FlatList
              data={cryptos}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Item crypto={item} />}
            />
          </View>
          <Text style={styles.btnAddCrypto}> + Add a Cryptocurrency</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#385775',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
  },
  textoCrypto: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  espacio: {
    marginTop: 15,
  },
  btnAddCrypto: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 15,
    color: '#385775',
  },
});

export default App;
