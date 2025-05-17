import styled, { css } from 'styled-components/native'

export const ProductDescriptionContainer = styled.View`
  width: 100%;

  padding: 12px;
  gap: 8px;

  align-items: flex-start;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`

export const ProductTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.XG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_SEMIBOLD};
  `}
`

export const ProductText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`

export const ProductProductionTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
  `}
`

export const ProductDeliveryPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_DARK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_MEDIUM};
  `}
`

export const SeparatorLine = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
