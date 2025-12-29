import { useEffect } from 'react'

import { useGeolocation } from '@hooks/useGeolocation'
import { useAppNavigation } from '@hooks/useAppNavigation'

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

  const { navigate } = useAppNavigation()

  const handleGoToCart = () => {
    navigate('cart')
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
