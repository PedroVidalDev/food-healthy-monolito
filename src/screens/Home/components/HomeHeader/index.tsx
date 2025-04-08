import { useEffect } from 'react'
import * as PhosphorIcons from 'phosphor-react-native'

import { useGeolocation } from '@hooks/useGeolocation'

import {
  Container,
  HomeHeaderGreeting,
  LocalizationAndCartContainer,
  LocalizationContainer,
  LocalizationText,
} from './styles'

export const HomeHeader = () => {
  const { location, getCurrentLocation } = useGeolocation()

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  return (
    <Container>
      <HomeHeaderGreeting>Olá, João</HomeHeaderGreeting>
      <LocalizationAndCartContainer>
        <LocalizationContainer>
          <PhosphorIcons.MapPin size={16} color="#50AA86" weight="fill" />
          <LocalizationText>{location}</LocalizationText>
        </LocalizationContainer>
        <PhosphorIcons.ShoppingCart size={16} color="#50AA86" weight="fill" />
      </LocalizationAndCartContainer>
    </Container>
  )
}
