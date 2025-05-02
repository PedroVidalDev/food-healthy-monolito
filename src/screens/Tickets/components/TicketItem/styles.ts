import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const TicketItemContainer = styled(Pressable).attrs({
  android_ripple: {
    color: '#00000020',
    borderless: false,
    foreground: true,
  },
})`
  width: 100%;
  height: 98px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  padding: 4px;

  align-items: center;
  flex-direction: row;
`

export const TicketItemIconContainer = styled.View`
  width: 25%;
  height: 100%;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};

  align-items: center;
  justify-content: center;
`

export const TicketDescriptionContainer = styled.View`
  flex: 1;
  height: 100%;

  padding: 0 16px;

  justify-content: center;
  align-items: flex-start;
`

export const TicketItemTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const TicketItemDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.BLACK};
  `}
`

export const DescriptionSpan = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
  `}
`
