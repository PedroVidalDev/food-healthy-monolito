import { useEffect, useState } from 'react'

import { Icon } from '@components/Icon'

import {
  PaymentPixMethodContainer,
  PixDescription,
  PixKeyContainer,
  PixKeyText,
  PixTimeContainer,
  PixTimeProgressBar,
  PixTimeText,
} from './styles'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const PaymentPixMethod = () => {
  const navigate = useNavigation()

  const [paymentTime, setPaymentTime] = useState(120)

  useEffect(() => {
    if (paymentTime === 0) {
      Alert.alert(
        'Tempo acabou',
        'Infelizmente seu tempo acabou, e o pagamento foi cancelado. Iremos te encaminhar para a página inicial.',
      )
      navigate.navigate('bottomTabs', {
        page: 'home',
      })
    }

    const timer = setInterval(() => {
      setPaymentTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate, paymentTime])

  const minutes = Math.floor(paymentTime / 60)
  const seconds = paymentTime % 60
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <PaymentPixMethodContainer>
      <PixKeyContainer>
        <PixKeyText numberOfLines={1} ellipsizeMode="tail">
          testestetetestestetedsadadadadadadsadsadsadasdas
        </PixKeyText>
        <Icon name="Copy" color="BLACK" size={24} />
      </PixKeyContainer>
      <PixDescription>
        Copie a chave PIX acima! O tempo para você pagar acaba em:
      </PixDescription>
      <PixTimeContainer>
        <PixTimeText>
          0{minutes}:{formattedSeconds}
        </PixTimeText>
        <PixTimeProgressBar progress={(paymentTime / 120) * 100} />
      </PixTimeContainer>
    </PaymentPixMethodContainer>
  )
}
