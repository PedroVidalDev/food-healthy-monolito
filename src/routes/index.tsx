import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Help } from '@screens/Help'
import { Payment } from '@screens/Payment'
import { Tickets } from '@screens/Tickets'

import { BottomTabs } from './app-routes/BottomTabs'

import { AppRoutesProps } from './types'

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="bottomTabs" component={BottomTabs} />
        <Screen name="tickets" component={Tickets} />
        <Screen name="payment" component={Payment} />
        <Screen name="help" component={Help} />
      </Navigator>
    </NavigationContainer>
  )
}
