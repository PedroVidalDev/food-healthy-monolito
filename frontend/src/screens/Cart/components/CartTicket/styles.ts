import styled, { css } from 'styled-components/native'

export const TicketContainer = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const TicketLeftSide = styled.View`
  flex-direction: row;

  align-items: center;

  gap: 12px;
`

export const TicketLeftSideText = styled.View`
  align-items: flex-start;

  justify-content: center;
`

export const TicketLeftSideTextTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const TicketLeftSideTextSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_400};
  `}
`

export const TicketTicketRightSide = styled.TouchableOpacity``

export const TicketRightSideText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.PRIMARY};
  `}
`
