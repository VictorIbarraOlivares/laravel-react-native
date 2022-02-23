import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
require("./src/theme");

export default function App({ appName }) {
  let [fontsLoaded] = useFonts({
    Lato_100Thin, Lato_400Regular, Lato_700Bold,
  });

  const [isReady, setIsReady] = useState(false);

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{appName}</Text>
    </View>
  );
}

App.defaultProps = {
  appName: Constants.manifest.name,
};

const _cacheResourcesAsync = () => {
  const images = [
    require('./assets/app_icon.png'),
  ];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
  },
  text: {
    fontSize: '$font28',
    color: '$white',
    fontFamily: '$400Regular',
  }
});