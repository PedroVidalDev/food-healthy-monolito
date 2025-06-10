import { OptionProps } from './types'

import { Icon } from '@components/Icon'

import {
  IconContainer,
  OptionContainer,
  OptionSubtitle,
  OptionTextContainer,
  OptionTitle,
} from './styles'

export const Option = (props: OptionProps) => {
  const { icon, onPress, title, description } = props

  return (
    <OptionContainer onPress={onPress}>
      <IconContainer>
        <Icon name={icon} color="BLACK" size={24} />
      </IconContainer>
      <OptionTextContainer>
        <OptionTitle haveDescription={!!description}>{title}</OptionTitle>
        {description && <OptionSubtitle>{description}</OptionSubtitle>}
      </OptionTextContainer>
    </OptionContainer>
  )
}
