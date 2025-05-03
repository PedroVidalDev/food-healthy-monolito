import styled, { css } from 'styled-components/native'

export const SaleValuesContainer = styled.View`
  width: 100%;

  gap: 8px;
`

export const SaleValuesTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  width: 100%;
  text-align: center;
`

export const ValueContainer = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

interface ValueTextProps {
  isBold?: boolean
}

export const ValueText = styled.Text<ValueTextProps>`
  ${({ theme, isBold }) => css`
    font-family: ${isBold
      ? theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD
      : theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
