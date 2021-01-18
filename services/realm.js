import Realm from 'realm';
import HistoricoSchema from '../schemas/HistoricoSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [HistoricoSchema],
    schemaVersion: 1,
  });
  return realm;
};