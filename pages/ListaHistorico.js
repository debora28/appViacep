import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import Header from './components/Header';
import Historico from '../services/realm';

const ListaHistorico: () => React$Node = ({navigation, route}) => {
  return (
    <>
      <Header title="HISTÓRICO" />

      <View style={styles.container}>
        <Text style={styles.title}>Lista de Buscas Realizadas:</Text>
        <Text>{route.params.data.historico}</Text>
        <SafeAreaView style={styles.container}>
          <FlatList
          // data={historico}
          // renderItem={renderItem}
          // keyExtractor={item => item.logradouro}
          />
          </SafeAreaView>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ListaHistorico;
