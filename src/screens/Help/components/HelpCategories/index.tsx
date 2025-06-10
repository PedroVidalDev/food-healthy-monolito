import { useNavigation } from '@react-navigation/native'

import { AppNavigationRoutesProps } from '@routes/types'

import { Icon } from '@components/Icon'

import { helpMenuOptions } from './constants'

import {
  HelpCategoriasItem,
  HelpCategoriasItemText,
  HelpCategoriasItemTextSubtitle,
  HelpCategoriasItemTextTitle,
  HelpCategoriasList,
  HelpCategoriesContainer,
  HelpCategoriesTitle,
  IconContainer,
} from './styles'

export const HelpCategories = () => {
  const navigate = useNavigation<AppNavigationRoutesProps>()

  const handleClick = () => {
    navigate.navigate('support')
  }

  return (
    <HelpCategoriesContainer>
      <HelpCategoriesTitle>Categorias</HelpCategoriesTitle>
      <HelpCategoriasList>
        {helpMenuOptions.map((option, index) => (
          <HelpCategoriasItem onPress={handleClick} key={index}>
            <IconContainer>
              <Icon name={option.icon} size={24} color="BLACK" />
            </IconContainer>
            <HelpCategoriasItemText>
              <HelpCategoriasItemTextTitle>
                {option.title}
              </HelpCategoriasItemTextTitle>
              <HelpCategoriasItemTextSubtitle>
                {option.subtitle}
              </HelpCategoriasItemTextSubtitle>
            </HelpCategoriasItemText>
          </HelpCategoriasItem>
        ))}
      </HelpCategoriasList>
    </HelpCategoriesContainer>
  )
}
