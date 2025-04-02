export const categoryIcons = {
  drinks: require('assets/categoryIcons/drinks.svg'),
  pizza: require('assets/categoryIcons/pizza.svg'),
  salad: require('assets/categoryIcons/salad.svg'),
  favorite: require('assets/categoryIcons/favorite.svg'),
}

export const categories: {
  image: 'drinks' | 'pizza' | 'salad' | 'favorite'
  text: string
}[][] = [
  [
    {
      image: 'drinks',
      text: 'Bebidas',
    },
    {
      image: 'pizza',
      text: 'Pizza',
    },
    {
      image: 'salad',
      text: 'Salada',
    },
    {
      image: 'favorite',
      text: 'Favoritos',
    },
  ],
  [
    {
      image: 'drinks',
      text: 'Hambúrguer',
    },
    {
      image: 'pizza',
      text: 'Promoções',
    },
    {
      image: 'salad',
      text: 'PFs',
    },
    {
      image: 'favorite',
      text: 'Doces',
    },
  ],
]
