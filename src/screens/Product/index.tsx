import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProductHeader } from './components/ProductHeader'

import { ProductContainer } from './styles'

export const Product = () => {
  const insents = useSafeAreaInsets()

  return (
    <ProductContainer statusBarHeight={insents.top}>
      <ProductHeader />
    </ProductContainer>
  )
}
