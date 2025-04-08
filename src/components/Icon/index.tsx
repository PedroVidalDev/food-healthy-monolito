import * as PhosphorIcons from 'phosphor-react-native'

import { IconProps } from './types'

export const Icon = (props: IconProps) => {
  const { name = 'Cat', color, weight = 'regular', size = 24 } = props

  const IconComponent = PhosphorIcons[name] as React.FC<IconProps>

  return <IconComponent color={color} weight={weight} size={size} />
}
