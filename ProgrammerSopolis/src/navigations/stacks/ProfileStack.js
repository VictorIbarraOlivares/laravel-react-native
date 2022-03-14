import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import ChangePassword from "../../screens/ChangePassword";

const Stack = createNativeStackNavigator();

export default function ProfileStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen 
                name="ChangePassword" 
                component={ChangePassword} 
                options={{ headerBackTitle: "" }}
                />
        </Stack.Navigator>
    )
}