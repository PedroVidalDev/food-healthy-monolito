import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const HomeFoodCategoriesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;

  gap: 8px;
`

export const CategoriesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
export const CategoryContainer = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  align-items: center;
  justify-content: center;

  width: 23%;
  height: 84px;

  padding: 4px 8px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHTER};
`

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
