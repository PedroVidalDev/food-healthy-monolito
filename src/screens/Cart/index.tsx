import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { CartHeader } from './CartHeader'

import { CartContainer } from './styles'

export const Cart = () => {
  const insents = useSafeAreaInsets()

  return (
    <CartContainer statusBarHeight={insents.top}>
      <CartHeader />
    </CartContainer>
  )
}
