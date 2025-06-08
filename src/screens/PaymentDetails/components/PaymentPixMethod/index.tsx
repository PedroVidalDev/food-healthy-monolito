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

export const PaymentPixMethod = () => {
  const [paymentTime, setPaymentTime] = useState(120) // Initial time in seconds

  useEffect(() => {
    if (paymentTime === 0) return

    const timer = setInterval(() => {
      setPaymentTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [paymentTime])

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
      <PixDescription> O tempo para você pagar acaba em: </PixDescription>
      <PixTimeContainer>
        <PixTimeText>
          0{minutes}:{formattedSeconds}
        </PixTimeText>
        <PixTimeProgressBar progress={(paymentTime / 120) * 100} />
      </PixTimeContainer>
    </PaymentPixMethodContainer>
  )
}
