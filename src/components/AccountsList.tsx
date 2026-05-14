import { FlatList, View, Text } from 'react-native';
import AccountListItem from './AccountListItem';
import { useEffect, useState } from 'react';
import database, {accountsCollection} from '@/db';
import Account from '@/model/Accounts';

export default function AccountsList() {
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        (async () => {
            const accounts = await accountsCollection.query().fetch();
            setAccounts(accounts);
        })();
    }, []);
    return (
        <View>
            <FlatList
            contentContainerStyle={{gap: 5}}
            data={accounts}
            renderItem={({item})=><AccountListItem account={item}/>}/>
        </View>
    );
}