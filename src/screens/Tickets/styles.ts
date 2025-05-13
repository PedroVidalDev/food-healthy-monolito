import styled, { css } from 'styled-components/native'
import { ScrollView } from 'react-native'

export const TicketsContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 148,
    rowGap: 24,
  },
})<{ statusBarHeight: number }>`
  ${({ theme, statusBarHeight }) => css`
    flex: 1;
    padding: ${statusBarHeight + 24}px 24px 0;
    background-color: ${theme.COLORS.GRAY_900};
  `}
`

export const TicketsListContainer = styled.View`
  flex: 1;

  gap: 8px;
`

export const TicketsEmptyError = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
  `}

  width: 100%;

  text-align: center;
`
