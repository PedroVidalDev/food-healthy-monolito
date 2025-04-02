import { ItemIcon } from '@components/ItemIcon'

import { categories } from 'src/consts/category'

import MotoboyImage from '@assets/images/motoboy.png'

import {
  Banner,
  BannerImage,
  CategoryCards,
  CategoryCardsRow,
  CategoryContainer,
  CategoryTitle,
  Container,
  Description,
  Text,
  Title,
} from './styles'

export const Home = () => {
  return (
    <Container>
      <Banner>
        <Description>
          <Title> Frete Grátis </Title>
          <Text> Confira agora! </Text>
        </Description>
        <BannerImage source={MotoboyImage} />
      </Banner>
      <CategoryContainer>
        <CategoryTitle> Categorias </CategoryTitle>
        <CategoryCards>
          {categories.map((line, index) => (
            <CategoryCardsRow key={index}>
              {line.map((category, index) => (
                <ItemIcon
                  key={index}
                  text={category.text}
                  image={category.image}
                />
              ))}
            </CategoryCardsRow>
          ))}
        </CategoryCards>
      </CategoryContainer>
    </Container>
  )
}
