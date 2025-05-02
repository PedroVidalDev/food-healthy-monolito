import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Tickets } from '@screens/Tickets'

import { AppRoutesProps } from './types'

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="tickets" component={Tickets} />
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
