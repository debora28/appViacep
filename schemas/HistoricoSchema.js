const HistoricoSchema = {
    name: 'Historico',
    primaryKey: 'cep',
    properties: {
        id: string,
        cep: string,
        rua: string,
        complemento: string,
        bairro: string,
        localidade: string,
        uf: string,
        ibge: string,
        gia: string,
        ddd: string,
        siafi: string,
    },
  };