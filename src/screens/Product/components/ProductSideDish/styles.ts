import styled, { css } from 'styled-components/native'

export const ProductSideDishContainer = styled.View``

export const ProductSideDishTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`

export const ProductSideDishSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  `}
`

export const ProductSideDishList = styled.View``
