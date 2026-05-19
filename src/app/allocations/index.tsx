import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Link, Stack} from 'expo-router'
import AllocationsList from '@/components/AllocationsList';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Allocations'}}/>
      <Text>Allocations</Text>
      <Link href="/allocations/new" style={{padding: 10, color: 'white', backgroundColor: 'blue', borderRadius: 5, marginTop: 40, marginBottom: 10, width: '100%', textAlign: 'center'}}>New Allocations</Link>
      <AllocationsList/>
      {/* <StatusBar style="auto"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
