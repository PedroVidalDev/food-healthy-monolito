/* eslint-disable camelcase */

import { ThemeProvider } from 'styled-components/native'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Home } from '@screens/Home'

import theme from '@theme/index'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />

        <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
