import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HomeLastOrders } from './components/HomeLastOrders'
import { HomeFoodCategories } from './components/HomeFoodCategories'
import { HomeFreeShippingCard } from './components/HomeFreeShippingCard'

import { HomeContainer } from './styles'
import { HomeHeader } from './components/HomeHeader'

export const Home = () => {
  const insents = useSafeAreaInsets()

  return (
    <HomeContainer statusBarHeight={insents.top}>
      <HomeHeader />

      <HomeFreeShippingCard />

      <HomeFoodCategories />

      <HomeLastOrders />
    </HomeContainer>
  )
}
