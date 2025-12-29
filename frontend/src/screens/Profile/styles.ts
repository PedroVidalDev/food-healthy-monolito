import { ScrollView } from 'react-native'
import styled, { css } from 'styled-components/native'

export const ProfileContainer = styled(ScrollView).attrs({
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

export const ProfileDescription = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`

export const ProfileName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.BLACK};
  `}

  flex: 1;
  margin-left: 16px;
`
