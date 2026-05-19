import Account from '@/model/Accounts';
import { View, Text, StyleSheet } from 'react-native';
import { withObservables } from '@nozbe/watermelondb/react';
import AntDesign from '@expo/vector-icons/AntDesign';
import database from '@/db';

type AccountListItemType = {
    account: Account;
}
function AccountListItem({account}: AccountListItemType){

    const onDelete = async()=>{
        await database.write(async () => {
            await account.markAsDeleted();
        })
    }
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{account.name}</Text>
            <Text style={styles.percentage}>{account.cap}</Text>
            <Text style={styles.percentage}>{account.tap}</Text>
            <AntDesign name="delete" size={18} color="black" onPress={onDelete}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    percentage: {},
});




// v1
// const enhance = withObservables([], ({account}) => ({
//     account: account.observe(),
// }))
// export default enhance(AccountListItem);

// v2
// export default withObservables([], ({account}) => ({account: account.observe()}))(AccountListItem);

// v3
// export default withObservables([], ({account}) => ({account}))(AccountListItem);
export default withObservables(['account'], ({account}:AccountListItemType) => ({account}))(AccountListItem);