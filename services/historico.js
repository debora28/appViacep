import { getRealm } from "./realm";

export const salvarHistorico = async (historico) => {
    const realm = await getRealm();

    try {
        realm.write(() => {
            realm.create('Historico', historico, true);
        };       
    } catch (error) {
        console.log(error);
    }
};

export const consultarHistorico = async (historico) => {
    try {
        const realm = await getRealm();
        return await realm.objects('Historico');
              
    } catch (error) {
        console.log(error);
    }
};

//     const endereco = {
//         cep: string,
//         rua: string,
//         complemento: string,
//         bairro: string,
//         localidade: string,
//         uf: string,
//         ibge: string,
//         gia: string,
//         ddd: string,
//         siafi: string,
//     };
//     realm.create('Historico', data, true)
// })