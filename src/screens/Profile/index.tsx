import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfileContainer } from './styles'
import { ProfileMenuCategories } from './components/ProfileMenuCategories'

export const Profile = () => {
  const insents = useSafeAreaInsets()

  return (
    <ProfileContainer statusBarHeight={insents.top}>
      <ProfileMenuCategories />
    </ProfileContainer>
  )
}
