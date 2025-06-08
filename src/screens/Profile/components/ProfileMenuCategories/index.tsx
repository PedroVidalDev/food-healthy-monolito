import { ProfileMenuOption, profileMenuOptions } from './constants'

import { Icon } from '@components/Icon'

import {
  IconContainer,
  ProfileCategoriasItem,
  ProfileCategoriasItemText,
  ProfileCategoriasItemTextSubtitle,
  ProfileCategoriasItemTextTitle,
  ProfileCategoriasList,
} from './styles'
import { useNavigation } from '@react-navigation/native'

export const ProfileMenuCategories = () => {
  const navigate = useNavigation()

  const handlePress = (option: ProfileMenuOption) => {
    navigate.navigate(option.screen as never)
  }

  return (
    <ProfileCategoriasList>
      {profileMenuOptions.map((option, index) => (
        <ProfileCategoriasItem key={index} onPress={() => handlePress(option)}>
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
  )
}
