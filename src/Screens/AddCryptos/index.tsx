import React, {useState} from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import {
  AddContainer,
  AddCrypto,
  AddText,
  BtnBackToList,
  BtnView,
  Container,
  CryptoName,
} from './styles';
import {fetchCrypto} from '../../store/actions/cryptos';
import {AppDispatch} from '../../store/index';
import {useDispatch} from 'react-redux';

interface Props {
  navigation: any;
}

const AddCryptos = ({navigation}: Props) => {
  const [addCrypto, setAddCrypto] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onAdd = async () => {
    await dispatch(fetchCrypto(addCrypto));
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <BtnView>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <BtnBackToList> &lt; Back to list </BtnBackToList>
        </Pressable>
      </BtnView>
      <Container>
        <AddCrypto>Add a Cryptocurrency</AddCrypto>
        <CryptoName
          placeholder="Use a name or ticker symbol..."
          placeholderTextColor={'#A4A4A4'}
          value={addCrypto}
          onChangeText={setAddCrypto}
          onFocus={() => setIsFocused(true)}
          isFocused={isFocused}
        />
      </Container>
      <AddContainer>
        <Pressable disabled={addCrypto.length < 1} onPress={onAdd}>
          <AddText disabled={addCrypto.length < 1}>Add</AddText>
        </Pressable>
      </AddContainer>
    </SafeAreaView>
  );
};

export default AddCryptos;
