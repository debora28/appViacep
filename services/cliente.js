import { getRealm } from "./realm";

const realm = await getRealm();
realm.write(() => {
    const data = {
        id: '123',
        amount: 12.4,
        entryAt: Date(),
        category: category,
    };
    realm.create('Cliente', data, true)
})