import {
  Title,
  CategoryTitle,
  CategoryContainer,
  CategoriesContainer,
  HomeFoodCategoriesContainer,
} from './styles'

import { homeFoodCategories } from '@screens/Home/constants'

export const HomeFoodCategories = () => {
  return (
    <HomeFoodCategoriesContainer>
      <Title>Categorias</Title>

      <CategoriesContainer>
        {homeFoodCategories.map((category) => (
          <CategoryContainer key={category.id} style={{ elevation: 1 }}>
            <category.icon size={32} color="#000" />
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryContainer>
        ))}
      </CategoriesContainer>
    </HomeFoodCategoriesContainer>
  )
}
