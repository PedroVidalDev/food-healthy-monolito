import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const IconContainer = styled.View`
  width: 52px;
  height: 52px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  align-items: center;
  justify-content: center;
`

export const ProfileCategoriasList = styled.View`
  width: 100%;

  gap: 8px;
`

export const ProfileCategoriasItem = styled(Pressable).attrs({
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

export const ProfileCategoriasItemText = styled.View`
  margin-left: 8px;
`

export const ProfileCategoriasItemTextTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`

export const ProfileCategoriasItemTextSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
