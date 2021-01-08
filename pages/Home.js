import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from './components/Header';
import {pegarEndereco} from '../services/apiCep';
import {salvarHistorico} from '../services/historico';
// import axios from 'axios';

const Home: () => React$Node = ({navigation}) => {
  const [cep, setCep] = React.useState('');
  
  const buscar = async () => {
    const endereco = await pegarEndereco(cep);
    const historico = {
          id: endereco.cep + Date.now(),
          rua: endereco.rua,
          complemento: endereco.complemento,
          bairro: endereco.bairro,
          localidade: endereco.localidade,
          uf: endereco.uf,
          ibge: endereco.ibge,
          gia: endereco.gia,
          ddd: endereco.ddd,
          siafi: endereco.siafi,
        };
        await salvarHistorico(historico);
        
    // axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    //   const endereco = {
    //     rua: response.data.logradouro,
    //     complemento: response.data.complemento,
    //     bairro: response.data.bairro,
    //     localidade: response.data.localidade,
    //     uf: response.data.uf,
    //     ibge: response.data.ibge,
    //     gia: response.data.gia,
    //     ddd: response.data.ddd,
    //     siafi: response.data.siafi,
    //   }
      navigation.navigate('Pages3', endereco);
    });
  };



  // const [cep, setCep] = React.useState('');

  return (
    <>
      <Header title="CONSULTA DE CEP" />
      <View style={styles.container}>
        <Text style={styles.title}>Digite o CEP:</Text>
        <Text></Text>
        <TextInput onChangeText={(text) => setCep(text)} value={cep} style={styles.textInput} ></TextInput>
        <Text></Text>
        <Button
          title="Buscar"
          onPress={() => buscar()}
        />
        <Text></Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6495ed',
  },
  textInput: {
    backgroundColor: '#ffffff',
    width: 200,
    borderColor: '#000000',
  }
});

export default Home;
