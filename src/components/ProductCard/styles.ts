import { Pressable } from 'react-native'
import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  display: flex;
  flex-direction: row;

  height: 100px;

  border-radius: 8px;

  padding: 12px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHTER};
`

export const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 75px;
  height: 75px;

  border-radius: 8px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 8px;
`
export const TextContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 16px 12px;
`

export const TextContainerAdjust = styled.View`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_400};
  `}
`

export const PriceText = styled.Text`
  display: flex;

  width: 100%;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 2px;
`

export const CoinType = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.PRIMARY_DARK};
  `}
`

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    font-size: ${theme.FONT_SIZE.XG}px;
    color: ${theme.COLORS.PRIMARY_DARK};
  `}
`
