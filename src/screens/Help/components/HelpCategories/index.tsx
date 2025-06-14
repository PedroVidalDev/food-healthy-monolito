import { Option } from '@components/Option'

import { helpMenuOptions } from './constants'
import { SupportContent } from '@screens/Support/types'

import { useAppNavigation } from '@hooks/useAppNavigation'

import {
  HelpCategoriasList,
  HelpCategoriesTitle,
  HelpCategoriesContainer,
} from './styles'

export const HelpCategories = () => {
  const navigate = useAppNavigation()

  const handleClick = (content: SupportContent) => {
    navigate.navigate('support', content)
  }

  return (
    <HelpCategoriesContainer>
      <HelpCategoriesTitle>Categorias</HelpCategoriesTitle>
      <HelpCategoriasList>
        {helpMenuOptions.map((option, index) => (
          <Option
            key={index}
            icon={option.icon}
            onPress={() => handleClick(option.content)}
            title={option.title}
            description={option.subtitle}
          />
        ))}
      </HelpCategoriasList>
    </HelpCategoriesContainer>
  )
}
