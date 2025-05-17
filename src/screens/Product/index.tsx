import { useSafeAreaInsets } from 'react-native-safe-area-context'

import DemoImage from '@assets/motoboy-shipping.png'

import { ProductHeader } from './components/ProductHeader'
import { ProductDescription } from './components/ProductDescription'

import { ProductContainer, ProductImage } from './styles'

export const Product = () => {
  const insents = useSafeAreaInsets()

  return (
    <ProductContainer statusBarHeight={insents.top}>
      <ProductHeader />

      <ProductImage source={DemoImage} />

      <ProductDescription />
    </ProductContainer>
  )
}
