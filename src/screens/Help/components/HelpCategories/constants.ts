import * as PhosphorIcons from 'phosphor-react-native'

type HelpMenu = {
  title: string
  subtitle: string
  icon: keyof typeof PhosphorIcons
}

export const helpMenuOptions: HelpMenu[] = [
  {
    title: 'Pagamentos',
    subtitle: 'Reembolso, problemas, cobranças...',
    icon: 'CreditCard',
  },
  {
    title: 'Conta',
    subtitle: 'Senha, verificação em duas etapas...',
    icon: 'Users',
  },
  {
    title: 'Compras',
    subtitle: 'Problemas com compra...',
    icon: 'Wallet',
  },
  {
    title: 'Políticas e termos',
    subtitle: 'Cancelamento, termos de uso...',
    icon: 'FileDoc',
  },
  {
    title: 'Suporte',
    subtitle: 'Suporte online com atendente...',
    icon: 'UserFocus',
  },
]
