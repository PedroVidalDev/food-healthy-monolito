import { Pressable, ScrollView } from 'react-native'
import styled, { css } from 'styled-components/native'

export const AboutUsContainer = styled(ScrollView).attrs({
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

export const AboutUsOptionsContainer = styled.View`
  gap: 8px;

  width: 100%;
`

export const AboutUsOption = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  width: 100%;

  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const IconContainer = styled.View`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`

export const AboutUsText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  margin-left: 8px;
`
