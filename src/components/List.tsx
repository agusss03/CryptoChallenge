import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const List = () => {
  return (
    <>
      {/*BITCOIN*/}
      <View style={styles.wrapper}>
        {/*Izquierda*/}
        <View style={styles.izquierda}>
          <Image
            source={require('./images/flecha/bitcoin.jpg')}
            style={styles.logoB}
          />
          <View style={styles.titulosView}>
            <Text style={styles.titulo}>Bitcoin</Text>
            <Text>BTC</Text>
          </View>
        </View>

        {/*Derecha*/}
        <View style={styles.derecha}>
          <Text style={styles.valor}>$7,215.68</Text>
          <View style={styles.ganancia}>
            <Image
              source={require('./images/flecha/FlechaVerde.png')}
              style={styles.flechaV}
            />
            <Text style={styles.gananciaNumero}>1.82%</Text>
          </View>
        </View>
      </View>

      <View style={styles.separador} />

      {/*ETHEREUM*/}
      <View style={styles.wrapper}>
        {/*Izquierda*/}
        <View style={styles.izquierda}>
          <Image
            source={require('./images/flecha/et.png')}
            style={styles.logoB}
          />
          <View style={styles.titulosView}>
            <Text style={styles.titulo}>Ethereum</Text>
            <Text>ETH</Text>
          </View>
        </View>

        {/*Derecha*/}
        <View style={styles.derecha}>
          <Text style={styles.valor}>$146.83</Text>
          <View style={styles.ganancia}>
            <Image
              source={require('./images/flecha/FlechaVerde.png')}
              style={styles.flechaV}
            />
            <Text style={styles.gananciaNumero}>1.46%</Text>
          </View>
        </View>
      </View>

      <View style={styles.separador} />

      {/*XRP*/}
      <View style={styles.wrapper}>
        {/*Izquierda*/}
        <View style={styles.izquierda}>
          <Image
            source={require('./images/flecha/xrp.png')}
            style={styles.logoB}
          />
          <View style={styles.titulosView}>
            <Text style={styles.titulo}>XRP</Text>
            <Text>XRP</Text>
          </View>
        </View>

        {/*Derecha*/}
        <View style={styles.derecha}>
          <Text style={styles.valor}>$0.220568</Text>
          <View style={styles.ganancia}>
            <Image
              source={require('./images/flecha/FlechaRoja.png')}
              style={styles.flechaV}
            />
            <Text style={styles.perdidaNumero}>2.47%</Text>
          </View>
        </View>
      </View>
      <View style={styles.separador} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoB: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  izquierda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulosView: {
    marginLeft: 7,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  derecha: {
    alignItems: 'flex-end',
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  ganancia: {
    flexDirection: 'row',
  },
  flechaV: {
    height: 10,
    width: 10,
    marginRight: 4,
    marginTop: 6,
  },
  gananciaNumero: {
    color: '#0C9B4C',
  },
  perdidaNumero: {
    color: '#FF1733',
  },
  separador: {
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginTop: 15,
  },
});
export default List;
