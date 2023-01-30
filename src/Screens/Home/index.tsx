import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import Crypto from '../../components/Crypto';
import {Container, Title, ImageApp, Space, BTNAddCrypto} from './styles';
import {useAppSelector} from '../../store';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Home = ({navigation}: Props) => {
  const cryptosState = useAppSelector(state => state);

  return (
    <>
      <SafeAreaView>
        <Container>
          <View>
            <Title> CryptoTracker Pro </Title>
          </View>
          <ImageApp source={require('../../assets/images/Face.jpg')} />
        </Container>
        <Space />
        <View>
          <View>
            <FlatList
              data={cryptosState?.crypto?.cryptos}
              keyExtractor={({id}) => `${id}`}
              renderItem={({item}) => <Crypto crypto={item} />}
              ListFooterComponent={
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddCryptos')}>
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
export default Home;
