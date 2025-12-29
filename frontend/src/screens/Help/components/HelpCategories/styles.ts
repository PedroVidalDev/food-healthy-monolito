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

export const HelpCategoriasList = styled.View`
  width: 100%;

  gap: 8px;
`
