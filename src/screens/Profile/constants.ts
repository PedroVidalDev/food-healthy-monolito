import * as PhosphorIcons from 'phosphor-react-native'

type ProfileMenuOption = {
  title: string
  subtitle: string
  icon: keyof typeof PhosphorIcons
}

export const ProfileMenuOptions: ProfileMenuOption[] = [
  {
    title: 'Meus Pedidos',
    subtitle: 'Veja todos os seus pedidos',
    icon: 'List',
  },
  {
    title: 'Meus Endereços',
    subtitle: 'Gerencie seus endereços',
    icon: 'Gps',
  },
  {
    title: 'Meus Cartões',
    subtitle: 'Gerencie seus cartões de crédito',
    icon: 'CreditCard',
  },
  {
    title: 'Configurações',
    subtitle: 'Ajustes e preferências da conta',
    icon: 'Gear',
  },
  {
    title: 'Ajuda e Suporte',
    subtitle: 'Obtenha ajuda e suporte para sua conta',
    icon: 'UserCircle',
  },
]
