import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import List from './src/components/List';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textoCrypto}> CryptoTracker Pro </Text>
        </View>
        <Image
          source={require('./assets/images/cara.jpg')}
          style={styles.imagen}
        />
      </SafeAreaView>
      <View style={styles.espacio} />
      <View>
        <List />
      </View>
      <View>
        <Text style={styles.btnAddCrypto}> + Add a Cryptocurrency</Text>
      </View>
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
