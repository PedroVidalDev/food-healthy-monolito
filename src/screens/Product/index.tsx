import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { mockProducts } from '@constants/mocks'

import DemoImage from '@assets/motoboy-shipping.png'

import { ProductFooter } from './components/ProductFooter'
import { ProductHeader } from './components/ProductHeader'
import { ProductSideDish } from './components/ProductSideDish'
import { ProductDescription } from './components/ProductDescription'

import { ProductContainer, ProductImage } from './styles'

export const Product = ({ route }) => {
  const { productId } = route.params || {}

  const mockProduct = mockProducts.filter((p) => p.id === productId)[0]

  const insents = useSafeAreaInsets()

  return (
    <ProductContainer statusBarHeight={insents.top}>
      <ProductHeader />

      <ProductImage source={DemoImage} />

      <ProductDescription product={mockProduct} />

      <ProductSideDish />

      <ProductFooter id={mockProduct.id} price={mockProduct.price} />
    </ProductContainer>
  )
}
