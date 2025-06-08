import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfileMenuCategories } from './components/ProfileMenuCategories'

import IconImage from '@assets/icon.png'

import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileName,
} from './styles'

export const Profile = () => {
  const insents = useSafeAreaInsets()

  return (
    <ProfileContainer statusBarHeight={insents.top}>
      <ProfileDescription>
        <ProfileImage source={IconImage} alt="icon-image" />
        <ProfileName>João</ProfileName>
      </ProfileDescription>
      <ProfileMenuCategories />
    </ProfileContainer>
  )
}
