import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainStackNavigatorRoutes = {
  tickets: undefined
  payment: undefined
  help: undefined
  bottomTabs: undefined
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
