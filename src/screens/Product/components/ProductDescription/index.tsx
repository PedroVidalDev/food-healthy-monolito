import { ProductDescriptionProps } from '@screens/Product/components/ProductDescription/types'

import {
  ProductDeliveryPrice,
  ProductDescriptionContainer,
  ProductProductionTime,
  ProductText,
  ProductTitle,
  SeparatorLine,
} from './styles'

export const ProductDescription = (props: ProductDescriptionProps) => {
  const { product } = props

  return (
    <ProductDescriptionContainer>
      <ProductTitle>{product.name}</ProductTitle>
      <SeparatorLine />
      <ProductText>{product.description}</ProductText>
      <SeparatorLine />
      <ProductProductionTime>
        24-32min | <ProductDeliveryPrice>Grátis</ProductDeliveryPrice>
      </ProductProductionTime>
    </ProductDescriptionContainer>
  )
}
