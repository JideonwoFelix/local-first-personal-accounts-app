import AccountsList from '@/components/AccountsList';
import {View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
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

    // const onTest = async ()=>{
    //     await database.write(async () => {
    //         const accounts = await accountsCollection.query().fetch();
    //         const account = accounts[2];
    //         account.update((updatedAccount)=>{
    //             updatedAccount.name = 'Updated namex2';
    //         })
    //     })
    // }

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1 }}
        >
            <View style={{flex: 1, gap: 5, padding: 5}}>
                <View style={styles.header}>
                    <Text>Name</Text>
                    <Text>CAP</Text>
                    <Text>TAP</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <AccountsList />
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.inputRow}>
                        <TextInput 
                            placeholder="Name" 
                            style={styles.input} 
                            value={name} 
                            onChangeText={setName}
                        />
                        <TextInput 
                            placeholder="CAP %" 
                            style={styles.input} 
                            value={cap} 
                            onChangeText={setCap}
                        />
                        <TextInput 
                            placeholder="TAP %" 
                            style={styles.input} 
                            value={tap} 
                            onChangeText={setTap}
                        />
                    </View>

                    <Button title="Add Account" onPress={createAccount} />
                    {/* <Button title="test update" onPress={onTest} /> */}
                </View>
            </View>
        </KeyboardAvoidingView>
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
    },
    footerContainer: {
        paddingBottom: 10, // Adjust for notch/home indicator
        backgroundColor: '#f8f8f8', 
        gap: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
});