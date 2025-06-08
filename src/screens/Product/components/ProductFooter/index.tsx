import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'

import { ProductFooterProps } from './types'

import { ProductFooterContainer } from './styles'

export const ProductFooter = (props: ProductFooterProps) => {
  const { price, id } = props

  const navigate = useNavigation()

  const handleAddToCart = () => {
    navigate.navigate('bottomTabs', {
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
