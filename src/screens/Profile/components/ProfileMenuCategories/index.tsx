import { profileMenuOptions } from './constants'

import { Icon } from '@components/Icon'

import {
  IconContainer,
  ProfileCategoriasItem,
  ProfileCategoriasItemText,
  ProfileCategoriasItemTextSubtitle,
  ProfileCategoriasItemTextTitle,
  ProfileCategoriasList,
} from './styles'

export const ProfileMenuCategories = () => {
  return (
    <ProfileCategoriasList>
      {profileMenuOptions.map((option, index) => (
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
  )
}
