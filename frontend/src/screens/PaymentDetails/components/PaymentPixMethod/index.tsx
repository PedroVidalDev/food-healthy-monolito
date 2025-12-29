import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import * as Clipboard from 'expo-clipboard'

import { useAppNavigation } from '@hooks/useAppNavigation'

import { generateRandomPixKey } from '@utils/generateRandomPix'

import { Icon } from '@components/Icon'

import {
  IconContainer,
  PaymentPixMethodContainer,
  PixDescription,
  PixKeyContainer,
  PixKeyText,
  PixTimeContainer,
  PixTimeProgressBar,
  PixTimeText,
} from './styles'

export const PaymentPixMethod = () => {
  const [pixKey] = useState<string>(generateRandomPixKey())

  const { navigate } = useAppNavigation()

  const [paymentTime, setPaymentTime] = useState(120)

  const handleCopyPixKey = async () => {
    await Clipboard.setStringAsync(pixKey)
    Alert.alert(
      'Chave copiada',
      'A chave PIX aleatória foi copiada com sucesso. Agora resta ir para o seu banco favorito e realizar o pagamento.',
    )
  }

  useEffect(() => {
    if (paymentTime === 0) {
      Alert.alert(
        'Tempo acabou',
        'Infelizmente seu tempo acabou, e o pagamento foi cancelado. Iremos te encaminhar para a página inicial.',
      )
      navigate('bottomTabs', {
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
          {pixKey}
        </PixKeyText>
        <IconContainer onPress={handleCopyPixKey}>
          <Icon name="Copy" color="BLACK" size={24} />
        </IconContainer>
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
