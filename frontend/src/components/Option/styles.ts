import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const OptionContainer = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  width: 100%;

  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const IconContainer = styled.View`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`

export const OptionTextContainer = styled.View`
  margin-left: 8px;
`

interface OptionTitleProps {
  haveDescription: boolean
}

export const OptionTitle = styled.Text<OptionTitleProps>`
  ${({ theme, haveDescription }) => css`
    font-family: ${haveDescription
      ? theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD
      : theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
    color: ${theme.COLORS.BLACK};
    font-size: ${haveDescription ? theme.FONT_SIZE.MD : theme.FONT_SIZE.LG}px;
  `}
`

export const OptionSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
