import { Stack } from 'expo-router';
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import database, {allocationsCollection} from '@/db';


export default function NewAllocationScreen(){

    const [income, setIcome] = useState('');

    const save = async ()=>{
        await database.write(async () => {
            allocationsCollection.create((allocation)=>{
                allocation.income = Number.parseFloat(income);
                setIcome('');
            })
        })
    }

    return(
        <View style={styles.container}>
            <Stack.Screen options={{title: 'New Allocation'}}/>
            <Text> New Allocation</Text>

            <View style={styles.inputRow} >
                <Text style={styles.label}>Income</Text>
                <TextInput placeholder="123" style={styles.input} value={income} onChangeText={setIcome}/>
            </View>
            <Button title="Save" onPress={save}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        padding: 10,
        gap: 10
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: 10,
        gap: 10,
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flex: 1
    },
})