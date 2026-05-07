import { Slot, Stack, Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

export default function RootLayout(){
    return (
        <Tabs>
            <Tabs.Screen 
                name='allocations' 
                options={{
                    title: 'Allocations',
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <MaterialIcons name="account-balance-wallet" size={24} color="black" />
                    )
                }}
            />
            
            <Tabs.Screen 
                name='accounts' 
                options={{
                    title: 'Accounts',
                    // headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <MaterialIcons name="account-balance-wallet" size={24} color="black" />
                    )
                }}
            />

            <Tabs.Screen 
                name='index' 
                options={{
                    title: 'Home',
                    headerShown: false,
                    href: null,
                    tabBarIcon: ({size, color})=>(
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />

        </Tabs>
    );
}