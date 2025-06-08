import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfileMenuOptions } from './constants'

import { Icon } from '@components/Icon'

import {
  IconContainer,
  ProfileCategoriasItem,
  ProfileCategoriasItemText,
  ProfileCategoriasItemTextSubtitle,
  ProfileCategoriasItemTextTitle,
  ProfileCategoriasList,
  ProfileContainer,
} from './styles'

export const Profile = () => {
  const insents = useSafeAreaInsets()

  return (
    <ProfileContainer statusBarHeight={insents.top}>
      <ProfileCategoriasList>
        {ProfileMenuOptions.map((option, index) => (
          <ProfileCategoriasItem key={index}>
            <IconContainer>
              <Icon name={option.icon} size={24} color="BLACK" />
            </IconContainer>
            <ProfileCategoriasItemText>
              <ProfileCategoriasItemTextTitle>
                {option.title}
              </ProfileCategoriasItemTextTitle>
              <ProfileCategoriasItemTextSubtitle>
                {option.subtitle}
              </ProfileCategoriasItemTextSubtitle>
            </ProfileCategoriasItemText>
          </ProfileCategoriasItem>
        ))}
      </ProfileCategoriasList>
    </ProfileContainer>
  )
}
