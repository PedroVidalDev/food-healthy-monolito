import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useAppNavigation } from '@hooks/useAppNavigation'

import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import {
  IconContainer,
  OrderConcludedContainer,
  OrderConcludedHeader,
  OrderConcludedInfos,
  OrderConcludedTexts,
  OrderInfoDescription,
  OrderInfoTitle,
  OrderTitle,
  OrderTotal,
} from './styles'

export const OrderConcluded = ({ route }) => {
  const { paymentMethod } = route.params || {}

  const { navigate } = useAppNavigation()

  const insents = useSafeAreaInsets()

  return (
    <OrderConcludedContainer statusBarHeight={insents.top}>
      <OrderConcludedHeader>
        <IconContainer>
          <Icon name="Coins" color="BLACK" size={32} />
        </IconContainer>
        <OrderConcludedTexts>
          <OrderTitle>Dados da compra:</OrderTitle>
          <OrderTotal>R$ 80,00</OrderTotal>
        </OrderConcludedTexts>
      </OrderConcludedHeader>
      <OrderConcludedInfos>
        <OrderInfoTitle>Data da compra:</OrderInfoTitle>
        <OrderInfoDescription>29/12/2025</OrderInfoDescription>
      </OrderConcludedInfos>
      <OrderConcludedInfos>
        <OrderInfoTitle>Nome do comprador:</OrderInfoTitle>
        <OrderInfoDescription>João</OrderInfoDescription>
      </OrderConcludedInfos>
      <OrderConcludedInfos>
        <OrderInfoTitle>Forma de pagamento:</OrderInfoTitle>
        <OrderInfoDescription>
          {paymentMethod === 'pix'
            ? 'Pix'
            : paymentMethod === 'debit'
              ? 'Cartão de débito'
              : 'Cartão de crédito'}
        </OrderInfoDescription>
      </OrderConcludedInfos>
      <Button
        backgroundColor="PRIMARY"
        text="Voltar"
        onPress={() => navigate('bottomTabs', { screen: 'home' })}
      />
    </OrderConcludedContainer>
  )
}
