import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex: 1;
`

export const Banner = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 12px;

  height: 160px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
`

export const Description = styled.View`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`

export const BannerImage = styled.Image`
  width: 30%;
`

export const CategoryContainer = styled.View`
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const CategoryCards = styled.View`
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const CategoryCardsRow = styled.View`
  display: flex;
  flex-direction: row;

  gap: 8px;
`
