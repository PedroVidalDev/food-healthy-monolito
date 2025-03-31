/* eslint-disable camelcase */
import theme from '@theme/index'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import styled, { css, ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

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
        <Title>Food Healthy....</Title>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`
