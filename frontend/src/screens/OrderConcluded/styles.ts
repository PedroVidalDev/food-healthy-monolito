import { ScrollView } from 'react-native'
import styled, { css } from 'styled-components/native'

export const OrderConcludedContainer = styled(ScrollView).attrs({
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

export const OrderConcludedHeader = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const IconContainer = styled.View`
  width: 64px;
  height: 64px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`

export const OrderConcludedTexts = styled.View`
  justify-content: center;
  align-items: center;
`

export const OrderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const OrderTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.XG}px;
  `}
`
export const OrderConcludedInfos = styled.View``

export const OrderInfoTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const OrderInfoDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
