import Realm from 'realm';
import ClienteSchema from '../schemas/ClienteSchema';
import HistoricoSchema from '../schemas/HistoricoSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [ClienteSchema, HistoricoSchema],
    schemaVersion: 2,
  });
  return realm;
};