import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PaymentPixMethod } from './components/PaymentPixMethod'
import { PaymentCardMethod } from './components/PaymentCardMethod'
import { PaymentDetailsHeader } from './components/PaymentDetailsHeader'

import { PaymentDetailsContainer } from './styles'

export const PaymentDetails = ({ route }) => {
  const { paymentType } = route.params || {}
  const insents = useSafeAreaInsets()

  return (
    <PaymentDetailsContainer statusBarHeight={insents.top}>
      <PaymentDetailsHeader />
      {paymentType === 'pix' ? <PaymentPixMethod /> : <PaymentCardMethod />}
    </PaymentDetailsContainer>
  )
}
