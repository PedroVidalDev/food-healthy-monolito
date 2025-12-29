import styled, { css } from 'styled-components/native'
import { ScrollView } from 'react-native'

export const CartContainer = styled(ScrollView).attrs({
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

export const Separator = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.COLORS.GRAY_800};
  `}
`
