import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text styles={styles.text}>Login</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$authBg',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '$primary',
    fontFamily: '$400Regular',
    fontWeight: '$fontWeight600',
    fontSize: '$font24',
  }
});