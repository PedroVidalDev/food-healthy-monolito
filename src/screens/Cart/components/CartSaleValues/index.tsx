import {
  SaleValuesContainer,
  SaleValuesTitle,
  ValueContainer,
  ValueText,
} from './styles'

export const CartSaleValues = () => {
  return (
    <SaleValuesContainer>
      <SaleValuesTitle>Resumo de valores</SaleValuesTitle>
      <ValueContainer>
        <ValueText>Subtotal</ValueText>
        <ValueText>R$ 10,00</ValueText>
      </ValueContainer>
      <ValueContainer>
        <ValueText>Taxa</ValueText>
        <ValueText>R$ 1,00</ValueText>
      </ValueContainer>
      <ValueContainer>
        <ValueText>Cupom</ValueText>
        <ValueText>R$ 5,00</ValueText>
      </ValueContainer>
      <ValueContainer>
        <ValueText isBold={true}>Total</ValueText>
        <ValueText isBold={true}>R$ 6,00</ValueText>
      </ValueContainer>
    </SaleValuesContainer>
  )
}
