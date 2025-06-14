import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '@components/Icon'
import { SupportHeader } from './components/SupportHeader'

import { SupportContent } from './types'

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

export const Support = ({ route }) => {
  const insents = useSafeAreaInsets()

  const { description, subtopics, title } =
    route.params || ({} as SupportContent)

  return (
    <SupportContainer statusBarHeight={insents.top}>
      <SupportHeader />

      <SupportDescription>
        <SupportDescriptionBanner>
          <SupportDescriptionTitle>{title}</SupportDescriptionTitle>
        </SupportDescriptionBanner>
      </SupportDescription>
      <TextSupportDescription>
        <TextSupportDescription>{description}</TextSupportDescription>
      </TextSupportDescription>

      {subtopics.map((subtopic, index) => (
        <SupportOptions key={index}>
          <Icon color="BLACK" name="CaretRight" size={16} />

          <SupportOptionsTextContainer>
            <SupportOptionsTitle> {subtopic.subtitle} </SupportOptionsTitle>
            <SupportOptionsText>{subtopic.text}</SupportOptionsText>
          </SupportOptionsTextContainer>
        </SupportOptions>
      ))}
    </SupportContainer>
  )
}
