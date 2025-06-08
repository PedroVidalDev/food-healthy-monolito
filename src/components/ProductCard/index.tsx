import { useNavigation } from '@react-navigation/native'

import FoodImage from '@assets/food.png'

import { ItemIconExpandedProps } from './types'

import {
  CoinType,
  Container,
  Description,
  Image,
  ImageContainer,
  PriceText,
  TextContainer,
  TextContainerAdjust,
  Title,
  Value,
} from './styles'

export const ProductCard = (props: ItemIconExpandedProps) => {
  const { id, title, description, price } = props

  const navigation = useNavigation()

  const handleNavigation = (productId: number) => {
    navigation.navigate('product', {
      productId,
    })
  }

  return (
    <Container onPress={() => handleNavigation(id)}>
      <ImageContainer>
        <Image source={FoodImage} alt="food" />
      </ImageContainer>
      <TextContainer>
        <TextContainerAdjust>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainerAdjust>
        <PriceText>
          <CoinType> R$ </CoinType> <Value> {price} </Value>
        </PriceText>
      </TextContainer>
    </Container>
  )
}
