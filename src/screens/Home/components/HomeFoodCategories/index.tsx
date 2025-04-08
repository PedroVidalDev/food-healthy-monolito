import { homeFoodCategories } from '@screens/Home/constants'

import { Icon } from '@components/Icon'

import {
  Title,
  CategoryTitle,
  CategoryContainer,
  CategoriesContainer,
  HomeFoodCategoriesContainer,
} from './styles'

export const HomeFoodCategories = () => {
  return (
    <HomeFoodCategoriesContainer>
      <Title>Categorias</Title>

      <CategoriesContainer>
        {homeFoodCategories.map((category) => (
          <CategoryContainer key={category.id} style={{ elevation: 1 }}>
            <Icon name={category.icon} size={32} color="BLACK" />
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryContainer>
        ))}
      </CategoriesContainer>
    </HomeFoodCategoriesContainer>
  )
}
