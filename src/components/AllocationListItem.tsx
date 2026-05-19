import { View, Text, StyleSheet } from "react-native";
import Allocation from "../model/Allocations";

export default function AllocationListItem( {allocation}: {allocation:Allocation} ) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>{allocation.createdAt.toLocaleDateString()}</Text>
                <Text style={styles.income}>${allocation.income}</Text>
            </View>
            <View style={styles.incomeColumn}>
                <View style={styles.incomeRow}>
                    <Text>Profit</Text>
                    <Text>$123</Text>
                </View>
                <View style={styles.incomeRow}>
                    <Text>Profit</Text>
                    <Text>$123</Text>
                </View>
                <View style={styles.incomeRow}>
                    <Text>Profit</Text>
                    <Text>$123</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        gap: 10,
        // padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        overflow: 'hidden'
    },
    header:{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    incomeColumn: {
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#ddd',
        padding: 10
    },
    incomeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    income:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green'
    }

});