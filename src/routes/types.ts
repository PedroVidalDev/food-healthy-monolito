import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AppRoutesProps = {
  home: undefined
  tickets: undefined
  cart: undefined
  payment: undefined
  help: undefined
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutesProps>
