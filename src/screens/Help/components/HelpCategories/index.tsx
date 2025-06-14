import { Option } from '@components/Option'

import { helpMenuOptions } from './constants'

import {
  HelpCategoriasList,
  HelpCategoriesContainer,
  HelpCategoriesTitle,
} from './styles'

export const HelpCategories = () => {
  const navigate = useNavigation<AppNavigationRoutesProps>()

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
            onPress={() => {}}
            title={option.title}
            description={option.subtitle}
          />
        ))}
      </HelpCategoriasList>
    </HelpCategoriesContainer>
  )
}
