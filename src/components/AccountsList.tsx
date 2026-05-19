import { FlatList, View, Text } from 'react-native';
import AccountListItem from './AccountListItem';
import { useEffect, useState } from 'react';
import database, {accountsCollection} from '@/db';
import Account from '@/model/Accounts';
import { withObservables} from '@nozbe/watermelondb/react';

interface AccountListProps{
    accounts:Account[]
}

function AccountsList({accounts}:AccountListProps) {
    // const [accounts, setAccounts] = useState<Account[]>([]);

    // useEffect(() => {
    //     (async () => {
    //         const accounts = await accountsCollection.query().fetch();
    //         setAccounts(accounts);
    //     })();
    // }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
            contentContainerStyle={{gap: 5}}
            data={accounts}
            renderItem={({item})=><AccountListItem account={item}/>}/>
        </View>
    );
}

// clear version
// const enhance = withObservables([], ()=>({
//     accounts: accountsCollection.query(),
// }))
// const EnhanceAccountsList = enhance(AccountsList); 
// export default EnhanceAccountsList

// fewer lines version
// const enhance = withObservables([], ()=>({
//     accounts: accountsCollection.query(),
// }))
// export default enhance(AccountsList)


// ultimate fewer lines version
export default withObservables([], () => ({
    accounts: accountsCollection.query(),
}))(AccountsList);