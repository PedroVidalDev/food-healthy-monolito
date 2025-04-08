import * as PhosphorIcons from 'phosphor-react-native'

import theme from '@theme/index'
import { IconComponentProps } from './types'

export const Icon = (props: IconComponentProps) => {
  const { name = 'Cat', color, weight = 'regular', size = 24 } = props

  const IconComponent = PhosphorIcons[name] as React.FC<PhosphorIcons.IconProps>

  const colorTheme = theme.COLORS[color]

  return (
    <IconComponent
      color={colorTheme}
      weight={weight as PhosphorIcons.IconWeight}
      size={size}
    />
  )
}
