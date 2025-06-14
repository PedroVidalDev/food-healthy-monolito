import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { paymentSupport } from './constants'

import { Icon } from '@components/Icon'
import { SupportHeader } from './components/SupportHeader'

import {
  SupportOptions,
  SupportContainer,
  SupportDescription,
  SupportOptionsText,
  SupportOptionsTitle,
  TextSupportDescription,
  SupportDescriptionTitle,
  SupportDescriptionBanner,
  SupportOptionsTextContainer,
} from './styles'

export const Support = () => {
  const insents = useSafeAreaInsets()

  return (
    <SupportContainer statusBarHeight={insents.top}>
      <SupportHeader />

      <SupportDescription>
        <SupportDescriptionBanner>
          <Icon name="PixLogo" color="GRAY_200" />
          <SupportDescriptionTitle>
            {paymentSupport.title}
          </SupportDescriptionTitle>
        </SupportDescriptionBanner>
      </SupportDescription>
      <TextSupportDescription>
        <TextSupportDescription>
          {paymentSupport.description}
        </TextSupportDescription>
      </TextSupportDescription>

      {paymentSupport.subtopics.map((subtopic, index) => (
        <SupportOptions key={index}>
          <Icon color="BLACK" name="ArrowArcRight" size={16} />

          <SupportOptionsTextContainer>
            <SupportOptionsTitle> {subtopic.subtitle} </SupportOptionsTitle>
            <SupportOptionsText>{subtopic.text}</SupportOptionsText>
          </SupportOptionsTextContainer>
        </SupportOptions>
      ))}
    </SupportContainer>
  )
}
