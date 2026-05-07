import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Link, Redirect} from 'expo-router'

export default function HomeScreen() {
  return <Redirect href="/allocations" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
