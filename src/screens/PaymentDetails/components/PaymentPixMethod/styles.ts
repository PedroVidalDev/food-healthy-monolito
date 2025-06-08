import styled, { css } from 'styled-components/native'

export const PaymentPixMethodContainer = styled.View`
  width: 100%;

  gap: 8px;
`

export const PixKeyContainer = styled.View`
  flex-direction: row;
  width: 100%;

  padding: 12px 12px;

  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const PixKeyText = styled.Text`
  width: 85%;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
  `}
`

export const PixDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
  `}
`

export const PixTimeContainer = styled.View`
  width: 100%;
`

export const PixTimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXG}px;
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`

interface PixTimeProgressBarProps {
  progress: number
}

export const PixTimeProgressBar = styled.View<PixTimeProgressBarProps>`
  width: ${({ progress }) => progress}%;
  height: 8px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
`
