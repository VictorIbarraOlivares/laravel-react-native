import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Programmers from "../../screens/Programmers";

const Stack = createNativeStackNavigator();

export default function ProgrammerStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProgrammerStack" component={Programmers} />
        </Stack.Navigator>
    )
}