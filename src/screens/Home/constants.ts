import * as PhosphorIcons from 'phosphor-react-native'

type HomeFoodCategoriesType = {
  id: number
  title: string
  icon: keyof typeof PhosphorIcons
}

export const homeFoodCategories: HomeFoodCategoriesType[] = [
  {
    id: 1,
    title: 'Bebidas',
    icon: 'BeerStein',
  },
  {
    id: 2,
    title: 'Pizza',
    icon: 'Pizza',
  },
  {
    id: 3,
    title: 'Salada',
    icon: 'BowlFood',
  },
  {
    id: 4,
    title: 'Favoritos',
    icon: 'Heart',
  },
  {
    id: 5,
    title: 'Burguer',
    icon: 'Hamburger',
  },
  {
    id: 6,
    title: 'Promos',
    icon: 'Tag',
  },
  {
    id: 7,
    title: 'PFs',
    icon: 'BowlSteam',
  },
  {
    id: 8,
    title: 'Doces',
    icon: 'Cake',
  },
]

export const lastOrders = [
  {
    title: 'Café com leite',
    description: 'Café expresso, leite e espuma de leite',
    price: 9.9,
  },
  {
    title: 'Café com leite',
    description: 'Café expresso, leite e espuma de leite',
    price: 9.9,
  },
  {
    title: 'Café com leite',
    description: 'Café expresso, leite e espuma de leite',
    price: 9.9,
  },
]
