import styled from 'styled-components/native'

export const SupportHeaderContainer = styled.View`
  display: grid;
  grid-template-columns: auto auto auto;
  flex-direction: row;

  width: 100%;
  height: 56px;

  align-items: center;
  justify-content: space-between;
`
export const SupportHeaderRollback = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`
export const SupportHeaderSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const SupportHeaderHelpContainer = styled.TouchableOpacity``

export const SupportHeaderHelp = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`
