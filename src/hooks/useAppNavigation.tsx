import { useNavigation } from '@react-navigation/native'
import { AppNavigationRoutesProps } from '@routes/types'

export const useAppNavigation = () => {
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  return {
    navigate,
  }
}
