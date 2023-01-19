import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type ItemProps = {
  crypto: {
    id: string;
    name: string;
    abr: string;
    price: number;
    logo: any;
    status: number;
  };
};

const Item = ({crypto}: ItemProps) => (
  <>
    <View style={styles.wrapper}>
      {/*Left side*/}
      <View style={styles.left}>
        <Image source={crypto.logo} style={styles.logo} />
        <View style={styles.titleView}>
          <Text style={styles.titulo}>{crypto.name}</Text>
          <Text>{crypto.abr}</Text>
        </View>
      </View>

      {/*Right side*/}
      <View style={styles.derecha}>
        <Text style={styles.valor}>${crypto.price}</Text>
        <View style={styles.ganancia}>
          <Image
            source={
              crypto.status > 0
                ? require('./arrows/FlechaVerde.png')
                : require('./arrows/FlechaRoja.png')
            }
            style={styles.flechaV}
          />
          <Text
            style={
              crypto.status > 0 ? styles.gananciaNumero : styles.perdidaNumero
            }>
            {Math.abs(crypto.status)}%
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.separador} />
  </>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
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

export default Item;
