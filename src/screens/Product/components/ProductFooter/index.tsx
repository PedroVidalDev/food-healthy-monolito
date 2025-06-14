import { useAppNavigation } from '@hooks/useAppNavigation'

import { Button } from '@components/Button'

import { ProductFooterProps } from './types'

import { ProductFooterContainer } from './styles'

export const ProductFooter = (props: ProductFooterProps) => {
  const { price, id } = props

  const { navigate } = useAppNavigation()

  const handleAddToCart = () => {
    navigate('bottomTabs', {
      screen: 'cart',
      params: {
        productId: id,
      },
    })
  }

  return (
    <ProductFooterContainer>
      <Button
        backgroundColor="PRIMARY"
        text={`Adicionar | R$ ${price}`}
        onPress={handleAddToCart}
      />
    </ProductFooterContainer>
  )
}
