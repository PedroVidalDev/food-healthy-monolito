import {
  ProductDeliveryPrice,
  ProductDescriptionContainer,
  ProductProductionTime,
  ProductText,
  ProductTitle,
  SeparatorLine,
} from './styles'

export const ProductDescription = () => {
  return (
    <ProductDescriptionContainer>
      <ProductTitle>Coxinha</ProductTitle>
      <SeparatorLine />
      <ProductText>lalalalalalallala</ProductText>
      <SeparatorLine />
      <ProductProductionTime>
        24-32min | <ProductDeliveryPrice>Grátis</ProductDeliveryPrice>
      </ProductProductionTime>
    </ProductDescriptionContainer>
  )
}
