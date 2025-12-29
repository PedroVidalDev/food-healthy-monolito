import theme from '@theme/index'
import styled, { css } from 'styled-components/native'

interface ButtonContainerProps {
  backgroundColor: keyof typeof theme.COLORS
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  align-items: center;
  justify-content: center;

  flex-direction: row;

  border-radius: 8px;

  ${({ theme, backgroundColor }) => css`
    background-color: ${theme.COLORS[backgroundColor]};
  `}

  padding: 12px 18px;
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
