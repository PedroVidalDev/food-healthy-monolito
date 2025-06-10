import { useNavigation } from '@react-navigation/native'
import { AppNavigationRoutes, AppNavigationRoutesProps } from '@routes/types'

export const useAppNavigation = () => {
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  const handleNavigation = (route: keyof AppNavigationRoutes) => {
    navigate(route)
  }

  return {
    navigate,
    handleNavigation,
  }
}
