import styled, { css } from 'styled-components/native'

export const HomeFreeShippingCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  gap: 24px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`

export const Description = styled.View`
  justify-content: space-between;

  padding: 12px 16px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  border-radius: 16px;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const BannerContainer = styled.View`
  width: 35%;
  padding: 0 12px;

  justify-content: center;
  align-items: center;
`

export const BannerImage = styled.Image`
  width: 120px;
  height: 120px;
`
