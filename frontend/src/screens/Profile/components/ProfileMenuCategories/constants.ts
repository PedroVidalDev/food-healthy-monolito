import * as PhosphorIcons from 'phosphor-react-native'

export type ProfileMenuOption = {
  title: string
  subtitle: string
  icon: keyof typeof PhosphorIcons
  screen: string
}

export const profileMenuOptions: ProfileMenuOption[] = [
  {
    title: 'Meus Pedidos',
    subtitle: 'Veja todos os seus pedidos',
    icon: 'List',
    screen: 'orders',
  },
  {
    title: 'Meus Endereços',
    subtitle: 'Gerencie seus endereços',
    icon: 'Gps',
    screen: 'addresses',
  },
  {
    title: 'Meus Cartões',
    subtitle: 'Gerencie seus cartões de crédito',
    icon: 'CreditCard',
    screen: 'cards',
  },
  {
    title: 'Configurações',
    subtitle: 'Ajustes e preferências da conta',
    icon: 'Gear',
    screen: 'settings',
  },
  {
    title: 'Ajuda e Suporte',
    subtitle: 'Obtenha ajuda e suporte para sua conta',
    icon: 'UserCircle',
    screen: 'help',
  },
  {
    title: 'Sobre Nós',
    subtitle: 'Saiba mais sobre nossa empresa',
    icon: 'Info',
    screen: 'aboutUs',
  },
]
