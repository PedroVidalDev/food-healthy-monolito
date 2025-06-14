import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { SupportContent } from '@screens/Support/types'

export type MainStackNavigatorRoutes = {
  tickets: undefined
  payment: undefined
  paymentDetails: undefined
  orderConcluded: {
    paymentMethod: string
  }
  help: undefined
  support: SupportContent
  bottomTabs: {
    screen: string
    params?: unknown
  }
  product: {
    productId: number
  }
  aboutUs: undefined
  appRules: {
    type: 'terms' | 'privacy'
  }
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
