import { House, Notepad, ShoppingCart, UserCircle } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { Cart } from '@screens/Cart'
import { Orders } from '@screens/Orders'
import { Profile } from '@screens/Profile'

export const BottomTabs = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  const { COLORS } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_DARK,
        tabBarInactiveTintColor: COLORS.GRAY_400,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <House weight="fill" color={color} />,
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <ShoppingCart weight="fill" color={color} />
          ),
        }}
      />

      <Screen
        name="orders"
        component={Orders}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => <Notepad weight="fill" color={color} />,
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <UserCircle weight="fill" color={color} />,
        }}
      />
    </Navigator>
  )
}
