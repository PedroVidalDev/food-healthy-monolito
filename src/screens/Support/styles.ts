import { ScrollView } from 'react-native'
import styled, { css } from 'styled-components/native'

export const SupportContainer = styled(ScrollView).attrs({
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
export const SupportHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const TextSupportHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`
export const SupportDescription = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const SupportDescriptionBanner = styled.View`
  width: 100%;
  flex-direction: row;
  color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
`

export const SupportDescriptionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XG}px;
`

export const TextSupportDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const SupportOptions = styled.View`
  flex-direction: row;
  color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
`

export const SupportOptionsTextContainer = styled.View`
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`
export const SupportOptionsTitle = styled.Text`
  flex-direction: column;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const SupportOptionsText = styled.Text`
  flex-direction: column;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
