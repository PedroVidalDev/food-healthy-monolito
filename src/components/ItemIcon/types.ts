import { categoryIcons } from 'src/consts/category'

export type ItemIconProps = {
  image: keyof typeof categoryIcons
  text?: string
}
