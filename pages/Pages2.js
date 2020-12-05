import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Header from './components/Header';

const Pages2: () => React$Node = ({navigation, route}) => {
  return (
    <>
      <Header title="Pages 2" />

      <View style={styles.container}>
        <Text style={styles.title}>Você está na página 2</Text>
        {/* <Text>Nome: {route.params.nome}</Text>
        <Text>Idade: {route.params.idade}</Text> */}
        {/* <Button title="Voltar" onPress={() => navigation.goBack()} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Pages2;
