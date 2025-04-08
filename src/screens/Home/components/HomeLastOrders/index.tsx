import { lastOrders } from '@screens/Home/constants'

import { ProductCard } from '@components/ProductCard'

import { Title, HomeLastOrdersContainer } from './styles'

export const HomeLastOrders = () => {
  return (
    <HomeLastOrdersContainer>
      <Title>Últimos pedidos</Title>

      {lastOrders.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </HomeLastOrdersContainer>
  )
}
