import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Programmers = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Programmers
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Programmers;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$appBg',
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});