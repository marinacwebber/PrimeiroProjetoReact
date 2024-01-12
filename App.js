import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

import { useCallback } from "react";

export default function App() {
  const [fonteCarregada, fontError] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada, fontError]);

  if (!fonteCarregada && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}