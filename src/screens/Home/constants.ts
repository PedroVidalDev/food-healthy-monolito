import * as PhosphorIcons from 'phosphor-react-native'

type HomeFoodCategoriesType = {
  id: number
  title: string
  icon: keyof typeof PhosphorIcons
}

export const homeFoodCategories: HomeFoodCategoriesType[] = [
  {
    id: 1,
    title: 'Café',
    icon: 'BeerStein',
  },
  {
    id: 2,
    title: 'Almoço',
    icon: 'Pizza',
  },
  {
    id: 3,
    title: 'Jantar',
    icon: 'BowlFood',
  },
  {
    id: 4,
    title: 'Sobremesas',
    icon: 'Heart',
  },
  {
    id: 5,
    title: 'Temáticos',
    icon: 'Hamburger',
  },
  {
    id: 6,
    title: 'Exclusivos',
    icon: 'Tag',
  },
  {
    id: 7,
    title: 'Favoritos',
    icon: 'BowlSteam',
  },
  {
    id: 8,
    title: 'Promos',
    icon: 'Cake',
  },
]
