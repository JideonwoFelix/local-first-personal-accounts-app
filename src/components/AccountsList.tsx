import { FlatList, View, Text } from 'react-native';
import AccountListItem from './AccountListItem';
export default function AccountsList() {
    return (
        <View>
            <FlatList
            contentContainerStyle={{gap: 5}}
            data={[1,2,3]}
            renderItem={()=><AccountListItem/>}/>
        </View>
    );
}