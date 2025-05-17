import FoodImage from '@assets/food.png'

import { Icon } from '@components/Icon'

import {
  Image,
  ImageContainer,
  SideDishContainer,
  SideDishLeftSide,
  SideDishPrice,
  SideDishRightSide,
  SideDishTitle,
} from './styles'
import { SideDishProps } from './types'

export const SideDish = (props: SideDishProps) => {
  const { product } = props

  return (
    <SideDishContainer>
      <SideDishLeftSide>
        <SideDishTitle>{product.name}</SideDishTitle>
        <SideDishPrice>+ R$ {product.price}</SideDishPrice>
      </SideDishLeftSide>
      <SideDishRightSide>
        <ImageContainer>
          <Image alt="side_fish_image" source={FoodImage} />
        </ImageContainer>
        <Icon color="PRIMARY_DARK" name="Plus" size={16} />
      </SideDishRightSide>
    </SideDishContainer>
  )
}
