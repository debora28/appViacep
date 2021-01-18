import React from 'react';
import HistoricoSchema from '../schemas/HistoricoSchema';
import { getRealm } from './realm';

export const salvarHistorico = async (historico) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Historico', historico, true);
        })

        alert('Salvo no histórico');
    } catch (error) {
        console.log("Erro na criação: ", error);
    }
};

export const consultarHistorico = async () => {
    try {
        const realm = await getRealm();
        return await realm.objects('Historico');
    } catch (error) {
        console.log("Erro na consulta: ", error);
    }

};

