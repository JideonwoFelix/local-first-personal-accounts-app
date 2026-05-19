import { FlatList, Text, View } from "react-native";
import AllocationListItem from "./AllocationListItem";
import { withObservables } from "@nozbe/watermelondb/react";
import { allocationsCollection } from "@/db";
import Allocation from '../model/Allocations';
import { Q } from "@nozbe/watermelondb";

function AllocationsList({ allocations }: { allocations: Allocation [] }) {
    return (
        <View style={{ padding: 10}}>
            <Text style={{paddingBottom: 30, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Allocations</Text>
            <FlatList 
                data={ allocations } 
                contentContainerStyle={{flexDirection: 'column', gap: 10}}
                renderItem={({item})=><AllocationListItem allocation={item}/>}
            />
        </View>
    );
}

const enhance = withObservables([], () => ({
    allocations: allocationsCollection.query(
        Q.sortBy('created_at', Q.desc),
    ),
}))


export default enhance(AllocationsList)