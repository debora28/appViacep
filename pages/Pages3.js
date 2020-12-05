import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import Home from "./Home";

const Pages3: () => React$Node = ({ navigation, route}) => {
  return (
    <>
      <Header title="RESULTADO" />
      <View style={styles.container}>
        <Text style={styles.title}>Endereço: </Text>
        <Text></Text>
        <Text></Text>
        <Text>Logradouro: {route.params.rua}</Text>
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
    backgroundColor: "#fff0f5",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6495ed",
  },
});

export default Pages3;
