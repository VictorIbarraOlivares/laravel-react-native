import React from "react";
import { createBottomTabNavigatior } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import { Constants } from "expo-constants";

import ProgrammerStack from "./stacks/ProgrammerStack";
import ProfileStack from "./stacks/ProfileStack";

const BottomTabs = createBottomTabNavigatior();

const TabBar = ({ appName }) => {
    return (
        <BottomTabs.Navigator
            initialRouteName="Programmers"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused }) => showIcon(route, focused),
                // headerRight: () => menuIcon(navigation),
                tabBarStyle: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    alignItems: "center",
                    backgroundColor: styles.tabStyles.backgroundColor,
                    paddingTop: 5,
                    position: 'absolute',
                    overflow: 'hidden',
                }
            })}
        >
            <BottomTabs.Screen
                name="Programmers"
                component={ProgrammerStack}
                options={{
                    title: "",
                    headerTitle: appName,
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: styles.header.fontSize,
                    }
                }}
            />

            <BottomTabs.Screen
                name="Account"
                component={ProfileStack}
                options={{
                    title: "",
                    headerTitle: appName,
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: styles.header.fontSize,
                    }
                }}
            />
        </BottomTabs.Navigator>
    );
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