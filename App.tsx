/* eslint-disable camelcase */
import theme from '@theme/index'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import styled, { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Home } from 'src/pages/Home'

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
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  justify-content: flex-start;

  padding: 0 12px;
`
