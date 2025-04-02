import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 75px;
  height: 75px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`

export const ItemImage = styled.Image`
  width: 40px;
  height: 40px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.BLACK};
  `}
`
