import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Tickets } from '@screens/Tickets'

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="tickets" component={Tickets} />
      </Navigator>
    </NavigationContainer>
  )
}
