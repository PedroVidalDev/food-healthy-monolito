import { NavigationContainer } from '@react-navigation/native'

import { MainStackNavigator } from './app-routes/MainStackNavigator'

export const Routes = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}
