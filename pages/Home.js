import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from './components/Header';
import {consultarEndereco} from '../services/apiCep';
import {consultarHistorico, salvarHistorico} from '../services/historico';

const Home: () => React$Node = ({navigation, route}) => {
  const [cep, setCep] = React.useState('');
  
  const pegarEndereco = async () => {
    const ende = await consultarEndereco(cep);
    const historico = {
          id: toString(ende.cep + Date.now()),
          cep: ende.cep,
          logradouro: ende.logradouro,
          complemento: ende.complemento,
          bairro: ende.bairro,
          localidade: ende.localidade,
          uf: ende.uf,
          ibge: ende.ibge,
          gia: ende.gia,
          ddd: ende.ddd,
          siafi: ende.siafi,
        };
        await salvarHistorico(historico);
        navigation.navigate('ResultadoBusca', ende);
        console.log(historico);
    };
    const verHistorico = async () => {
      const historico = await consultarHistorico();
      const envio = {
        data: historico,
      };
      navigation.navigate('ListaHistorico', envio);
    };

    return (
    <>
    <Header title="CONSULTA DE CEP" />
    <View style={styles.container}>
      <Text style={styles.title}>Digite o CEP:</Text>
      <Text></Text>
      <TextInput onChangeText={(text) => setCep(text)} value={cep} style={styles.textInput} ></TextInput>
      <Text></Text>
      <Button
        title="Buscar CEP"
        onPress={() => pegarEndereco()}
      />
      <Text></Text>
      <Button
        title="Ver Histórico"
        onPress={() => verHistorico()}
      />
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
    color: 'peru',
  },
  textInput: {
    backgroundColor: '#ffffff',
    width: 200,
    borderColor: '#000000',
  }
});

export default Home;
