import AccountsList from '@/components/AccountsList';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import database, {accountsCollection} from '@/db';
import Account from '@/model/Accounts';


export default function AccountsScreen(){

    const [name, setName] = useState('');
    const [cap, setCap] = useState('');
    const [tap, setTap] = useState('');


    const createAccount = async()=>{
        console.warn('Create account', tap, cap, name);
        await database.write(async () => {
            await accountsCollection.create((accounts)=>{
                accounts.name = name;
                accounts.cap = Number.parseFloat(cap);
                accounts.tap = Number.parseFloat(tap);
            });
        })
        setName('');
        setCap('');
        setTap('');
    }
    return(
        <View style={{gap: 5, padding: 5}}>
            <View style={styles.header}>
                <Text>Name</Text>
                <Text>CAP</Text>
                <Text>TAP</Text>
            </View>
            <AccountsList />

            <View style={styles.inputRow}>
                <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName}/>
                <TextInput placeholder="CAP %" style={styles.input} value={cap} onChangeText={setCap}/>
                <TextInput placeholder="TAP %" style={styles.input} value={tap} onChangeText={setTap}/>
                {/* <Entypo name="check" size={20} color="green"/> */}
            </View>

            <Button title="Add Account" onPress={createAccount}/>
        </View>
    );
}



const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    inputRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white'
    },
    input:{
        flex: 1
    }
});