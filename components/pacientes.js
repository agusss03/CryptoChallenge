/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const ListItem = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.paciente}>lista</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
  },
  paciente: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 5,
    marginLeft: 20,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 20,
  },
  fecha: {
    color: '#374151',
    marginLeft: 20,
  },
});
export default pacientes;
