import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: column;

  gap: 8px;
`

export const HomeHeaderGreeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const LocalizationAndCartContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
`

export const LocalizationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const LocalizationText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}
`
