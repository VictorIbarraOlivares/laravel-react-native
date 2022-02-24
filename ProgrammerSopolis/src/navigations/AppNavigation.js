import React from "react";
import AuthNavigation from "./AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    );
}

export default AppNavigation;