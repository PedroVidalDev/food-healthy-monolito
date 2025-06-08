import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MainStackNavigatorRoutes } from '@routes/types'

import { AboutUs, Help, Payment, Product, Tickets } from '@screens/index'

import { MainBottomTabs } from '../MainBottomTabs'

export const MainStackNavigator = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainStackNavigatorRoutes>()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="bottomTabs" component={MainBottomTabs} />
      <Screen name="tickets" component={Tickets} />
      <Screen name="payment" component={Payment} />
      <Screen name="product" component={Product} />
      <Screen name="aboutUs" component={AboutUs} />
      <Screen name="help" component={Help} />
    </Navigator>
  )
}
