import axios from 'axios';

export const pegarEndereco = async (cep) => {
  const response = await axios.get(`http:viacep.com.br/ws/${cep}/json`);

  const endereco = {
      rua: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      localidade: response.data.localidade,
      uf: response.data.uf,
      ibge: response.data.ibge,
      gia: response.data.gia,
      ddd: response.data.ddd,
      siafi: response.data.siafi,
  };
  return endereco;
};

export const inserirEndereco = async {endereco} => {
    //código para inserir o endereço
}