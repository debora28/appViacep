import axios from 'axios';

export const consultarEndereco = async (cep) => {
  const response = await axios.get(`http:viacep.com.br/ws/${cep}/json`);

  const ende = {
      id: response.data.id,
      cep: response.data.cep,
      logradouro: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      localidade: response.data.localidade,
      uf: response.data.uf,
      ibge: response.data.ibge,
      gia: response.data.gia,
      ddd: response.data.ddd,
      siafi: response.data.siafi,
  };
  return ende;
};
