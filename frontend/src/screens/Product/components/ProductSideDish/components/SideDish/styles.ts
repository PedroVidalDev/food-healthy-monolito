import styled, { css } from 'styled-components/native'

export const SideDishContainer = styled.View`
  width: 100%;
  height: 50px;

  border-radius: 8px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const SideDishLeftSide = styled.View``

export const SideDishRightSide = styled.View`
  flex-direction: row;

  align-items: center;

  gap: 8px;
`

export const SideDishTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  `}
`

export const SideDishPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  `}
`

export const ImageContainer = styled.View`
  width: 50px;
  height: 50px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 90%;
  height: 90%;
`
