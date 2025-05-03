import theme from '@theme/index'

export type ButtonProps = {
  text: string
  backgroundColor: keyof typeof theme.COLORS
}
