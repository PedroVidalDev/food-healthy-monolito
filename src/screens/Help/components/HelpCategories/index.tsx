import { Icon } from '@components/Icon'
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
import { helpMenuOptions } from './constants'

export const HelpCategories = () => {
  return (
    <HelpCategoriesContainer>
      <HelpCategoriesTitle>Categorias</HelpCategoriesTitle>
      <HelpCategoriasList>
        {helpMenuOptions.map((option, index) => (
          <HelpCategoriasItem key={index}>
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
