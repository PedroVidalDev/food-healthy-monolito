import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View``

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
    color: ${theme.COLORS.BLACK};
  `};
`

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 44px;

    padding: 12px;

    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 8px;
  `}
`
