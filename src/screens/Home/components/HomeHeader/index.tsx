import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useGeolocation } from '@hooks/useGeolocation'

import { AppNavigationRoutesProps } from '@routes/types'

import { Icon } from '@components/Icon'

import {
  CartButtonContainer,
  Container,
  HomeHeaderGreeting,
  LocalizationAndCartContainer,
  LocalizationContainer,
  LocalizationText,
} from './styles'

export const HomeHeader = () => {
  const { location, getCurrentLocation } = useGeolocation()

  const navigate = useNavigation<AppNavigationRoutesProps>()

  const handleGoToCart = () => {
    navigate.navigate('cart')
  }

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  return (
    <Container>
      <HomeHeaderGreeting>Olá, João</HomeHeaderGreeting>
      <LocalizationAndCartContainer>
        <LocalizationContainer>
          <Icon name="MapPin" size={16} color="PRIMARY_DARK" weight="fill" />
          <LocalizationText>{location}</LocalizationText>
        </LocalizationContainer>
        <CartButtonContainer onPress={handleGoToCart}>
          <Icon
            name="ShoppingCart"
            size={16}
            color="PRIMARY_DARK"
            weight="fill"
          />
        </CartButtonContainer>
      </LocalizationAndCartContainer>
    </Container>
  )
}
