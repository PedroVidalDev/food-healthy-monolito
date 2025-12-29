import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PaymentHeader } from './components/PaymentHeader'

import { PaymentContainer } from './styles'
import { PaymentMethods } from './components/PaymentMethods'

export const Payment = () => {
  const insents = useSafeAreaInsets()

  return (
    <PaymentContainer statusBarHeight={insents.top}>
      <PaymentHeader />
      <PaymentMethods />
    </PaymentContainer>
  )
}
