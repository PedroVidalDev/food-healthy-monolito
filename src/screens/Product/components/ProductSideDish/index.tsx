import {
  ProductSideDishContainer,
  ProductSideDishList,
  ProductSideDishSubtitle,
  ProductSideDishTitle,
} from './styles'

export const ProductSideDish = () => {
  return (
    <ProductSideDishContainer>
      <ProductSideDishTitle>Que tal um acompanhamento?</ProductSideDishTitle>
      <ProductSideDishSubtitle>
        Escolha as opções abaixo
      </ProductSideDishSubtitle>
      <ProductSideDishList></ProductSideDishList>
    </ProductSideDishContainer>
  )
}
