import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Home from './Home';

const ResultadoBusca: () => React$Node = ({ navigation, route}) => {
  return (
    <>
      <Header title="RESULTADO DA CONSULTA" />
      <View style={styles.container}>
        <Text style={styles.title}>Endereço: </Text>
        <Text></Text>
        <Text></Text>
        <Text>CEP: {route.params.cep}</Text>
        <Text>Logradouro: {route.params.logradouro}</Text>
        <Text>Complemento: {route.params.complemento}</Text>
        <Text>Bairro: {route.params.bairro}</Text>
        <Text>Localidade: {route.params.localidade}</Text>
        <Text>UF: {route.params.uf}</Text>
        <Text>IBGE: {route.params.ibge}</Text>
        <Text>GIA: {route.params.gia}</Text>
        <Text>DDD: {route.params.ddd}</Text>
        <Text>SIAFI: {route.params.siafi}</Text>
        <Text></Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6495ed",
  },
});

export default ResultadoBusca;
