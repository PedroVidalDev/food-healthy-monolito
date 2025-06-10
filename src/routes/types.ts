import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainStackNavigatorRoutes = {
  tickets: undefined
  payment: undefined
  paymentDetails: undefined
  help: undefined
  support: undefined
  bottomTabs: {
    screen: string
    params: unknown
  }
  product: undefined
  aboutUs: undefined
}

export type MainBottomTabsRoutes = {
  home: undefined
  cart: undefined
  orders: undefined
  profile: undefined
}

export type AppNavigationRoutes = MainStackNavigatorRoutes &
  MainBottomTabsRoutes

export type AppNavigationRoutesProps =
  NativeStackNavigationProp<AppNavigationRoutes>
