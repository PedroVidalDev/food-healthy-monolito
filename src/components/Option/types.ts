import * as PhosphorIcons from 'phosphor-react-native'

export type OptionProps = {
  icon: keyof typeof PhosphorIcons
  title: string
  description?: string
  onPress: () => void
}
