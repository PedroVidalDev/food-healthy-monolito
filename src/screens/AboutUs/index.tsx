import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '@components/Icon'
import { AboutUsHeader } from './components/AboutUsHeader'

import {
  AboutUsContainer,
  AboutUsOption,
  AboutUsOptionsContainer,
  AboutUsText,
  IconContainer,
} from './styles'

export const AboutUs = () => {
  const insents = useSafeAreaInsets()

  return (
    <AboutUsContainer statusBarHeight={insents.top}>
      <AboutUsHeader />
      <AboutUsOptionsContainer>
        <AboutUsOption>
          <IconContainer>
            <Icon name="Paperclip" color="BLACK" size={24} />
          </IconContainer>
          <AboutUsText> Termos de uso </AboutUsText>
        </AboutUsOption>
        <AboutUsOption>
          <IconContainer>
            <Icon name="Lock" color="BLACK" size={24} />
          </IconContainer>
          <AboutUsText> Política de privacidade </AboutUsText>
        </AboutUsOption>
      </AboutUsOptionsContainer>
    </AboutUsContainer>
  )
}
