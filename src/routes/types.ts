import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainStackNavigatorRoutes = {
  tickets: undefined
  payment: undefined
  paymentDetails: undefined
  orderConcluded: {
    paymentMethod: string
  }
  help: undefined
  bottomTabs: {
    screen: string
    params?: unknown
  }
  product: {
    productId: number
  }
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
