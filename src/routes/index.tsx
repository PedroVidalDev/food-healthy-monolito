import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Tickets } from '@screens/Tickets'

import { AppRoutesProps } from './types'
import { Cart } from '@screens/Cart'
import { Payment } from '@screens/Payment'

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="tickets" component={Tickets} />
        <Screen name="cart" component={Cart} />
        <Screen name="payment" component={Payment} />
      </Navigator>
    </NavigationContainer>
  )
}
