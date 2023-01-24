import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import Crypto from './src/components/Crypto';
import {Container, Title, ImageApp, Space, BTNAddCrypto} from './styles';

const App = () => {
  const [cryptos, setCryptos] = useState<any>([]);

  const getCryptos = async () => {
    const response = await fetch(
      'https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data',
    );
    const data = await response.json();
    setCryptos(data.data);
  };

  return (
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
              ListFooterComponent={
                <TouchableOpacity
                  onPress={() => {
                    getCryptos();
                  }}>
                  <BTNAddCrypto> + Add a Cryptocurrency </BTNAddCrypto>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
