import { sideDishProducts } from '@constants/mocks'

import { SideDish } from './components/SideDish'

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
      <ProductSideDishList>
        {sideDishProducts.map((mock) => (
          <SideDish product={mock} key={mock.id} />
        ))}
      </ProductSideDishList>
    </ProductSideDishContainer>
  )
}
