import * as PhosphorIcons from 'phosphor-react-native'

import theme from '@theme/index'

export type IconComponentProps = {
  name?: keyof typeof PhosphorIcons
  color: keyof typeof theme.COLORS
  weight?: string
  size?: number
}
