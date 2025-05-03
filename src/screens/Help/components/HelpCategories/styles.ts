import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const HelpCategoriesContainer = styled.View`
  width: 100%;

  gap: 12px;
`

export const HelpCategoriesTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}

  width: 100%;
  text-align: left;
`

export const IconContainer = styled.View`
  width: 52px;
  height: 52px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  align-items: center;
  justify-content: center;
`

export const HelpCategoriasList = styled.View`
  width: 100%;

  gap: 8px;
`

export const HelpCategoriasItem = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
`

export const HelpCategoriasItemText = styled.View`
  margin-left: 8px;
`

export const HelpCategoriasItemTextTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`

export const HelpCategoriasItemTextSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
