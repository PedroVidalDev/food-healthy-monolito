import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '@components/Icon'

import {
  SupportContainer,
  SupportDescription,
  SupportDescriptionBanner,
  SupportDescriptionTitle,
  SupportHeader,
  SupportOptions,
  SupportOptionsText,
  SupportOptionsTextContainer,
  SupportOptionsTitle,
  TextSupportDescription,
  TextSupportHeader,
} from './styles'

export const Support = () => {
  const insents = useSafeAreaInsets()

  return (
    <SupportContainer statusBarHeight={insents.top}>
      <SupportHeader>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
        <TextSupportHeader> Ajuda </TextSupportHeader>
      </SupportHeader>

      <SupportDescription>
        <SupportDescriptionBanner>
          <Icon name="PixLogo" color="GRAY_200" />
          <SupportDescriptionTitle> Pagamentos </SupportDescriptionTitle>
        </SupportDescriptionBanner>

        <TextSupportDescription> Bla Bla Bla pagar </TextSupportDescription>
      </SupportDescription>

      <SupportOptions>
        <Icon color="BLACK" name="ArrowArcRight" size={16} />

        <SupportOptionsTextContainer>
          <SupportOptionsTitle> Métodos aceitos </SupportOptionsTitle>
          <SupportOptionsText> Lorem ipsum </SupportOptionsText>
        </SupportOptionsTextContainer>
      </SupportOptions>
    </SupportContainer>
  )
}
