import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AppRoutesProps = {
  home: undefined
  tickets: undefined
  cart: undefined
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutesProps>
