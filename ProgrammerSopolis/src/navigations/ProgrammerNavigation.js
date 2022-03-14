import React from "react";
import { createBottomTabNavigatior } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import { Constants } from "expo-constants";

import ProgrammerStack from "./stacks/ProgrammerStack";
import ProfileStack from "./stacks/ProfileStack";

const BottomTabs = createBottomTabNavigatior();

const TabBar = ({ appName }) => {

}

TabBar.defaultProps = {
    appName: Constants.manifest.name,
}

const showIcon = (route, focused) => {
    let icon = ''
    switch (route.name) {
        case "Programmers": {
            icon = "home"
            break
        }
        case "Account": {
            icon = "person-outline"
            break
        }
    }

    return <Icon name={icon} type="ionicon" color={focused ? "#2570e3" : "white"} style={{ marginTop: 2 }} />
}

export default function ProgrammerNavigation() {
    return <TabBar />
}

const styles = EStyleSheet.create({
    tabStyles: {
        backgroundColor: '$black',
    },
    headerStyle: {
        backgroundColor: "$primary",
        shadowColor: "$primary",
    },
    header: {
        color: "$white",
        fontFamily: '$700Bold',
        fontSize: '$font22',
    }
});