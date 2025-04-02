import { categoryIcons } from 'src/consts/category'
import { Container, ItemImage, Title } from './styles'
import { ItemIconProps } from './types'

export const ItemIcon = (props: ItemIconProps) => {
  return (
    <Container>
      <ItemImage source={categoryIcons[props.image]} />
      <Title> {props.text} </Title>
    </Container>
  )
}
