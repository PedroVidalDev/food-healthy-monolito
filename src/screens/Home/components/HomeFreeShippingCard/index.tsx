import {
  Text,
  Title,
  BannerImage,
  Description,
  BannerContainer,
  HomeFreeShippingCardContainer,
} from './styles'

import MotoboyImage from '@assets/motoboy.png'

export const HomeFreeShippingCard = () => {
  return (
    <HomeFreeShippingCardContainer>
      <Description>
        <Title>Promoções no frete</Title>
        <Text>Experimente nossas entregas</Text>
      </Description>

      <BannerContainer>
        <BannerImage source={MotoboyImage} />
      </BannerContainer>
    </HomeFreeShippingCardContainer>
  )
}
