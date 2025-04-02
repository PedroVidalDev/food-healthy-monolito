import { ItemIcon } from '@components/ItemIcon'
import { ItemIconExpanded } from '@components/ItemIconExpanded'

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
  ItemContainerTitle,
  ItemsContainer,
  Text,
  Title,
} from './styles'
import { items } from 'src/consts/item'

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
      <ItemsContainer>
        <ItemContainerTitle> Últimos pedidos </ItemContainerTitle>
        {items.map((item, index) => (
          <ItemIconExpanded
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ItemsContainer>
    </Container>
  )
}
