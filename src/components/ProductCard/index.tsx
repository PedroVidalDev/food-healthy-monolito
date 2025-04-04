import FoodImage from '@assets/images/food.png'

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
  const { title, description, price } = props

  return (
    <Container>
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
