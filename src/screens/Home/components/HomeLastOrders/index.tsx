import { lastOrderedProducts } from '@constants/mocks'

import { ProductCard } from '@components/ProductCard'

import { Title, HomeLastOrdersContainer } from './styles'

export const HomeLastOrders = () => {
  return (
    <HomeLastOrdersContainer>
      <Title>Últimos pedidos</Title>

      {lastOrderedProducts.map((item, index) => (
        <ProductCard
          key={index}
          id={item.id}
          title={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </HomeLastOrdersContainer>
  )
}
