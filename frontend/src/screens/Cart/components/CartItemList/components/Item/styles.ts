import styled, { css } from 'styled-components/native'

export const ItemContainer = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
`

export const ItemImageContainer = styled.View`
  width: 86px;
  height: 86px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  align-items: center;
  justify-content: center;
`

export const ItemInfoContainer = styled.View`
  flex: 1;

  margin-left: 12px;
`

export const ItemName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const ItemPrice = styled.Text`
  display: flex;

  width: 100%;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 2px;
`

export const ItemQuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4px;
`

export const ItemQuantityButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const ItemQuantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLACK};
  `}
`
