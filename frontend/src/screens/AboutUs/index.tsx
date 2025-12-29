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
import { useAppNavigation } from '@hooks/useAppNavigation'

export const AboutUs = () => {
  const insents = useSafeAreaInsets()

  const { navigate } = useAppNavigation()

  return (
    <AboutUsContainer statusBarHeight={insents.top}>
      <AboutUsHeader />
      <AboutUsOptionsContainer>
        <AboutUsOption onPress={() => navigate('appRules', { type: 'terms' })}>
          <IconContainer>
            <Icon name="Paperclip" color="BLACK" size={24} />
          </IconContainer>
          <AboutUsText> Termos de uso </AboutUsText>
        </AboutUsOption>
        <AboutUsOption
          onPress={() => navigate('appRules', { type: 'privacy' })}
        >
          <IconContainer>
            <Icon name="Lock" color="BLACK" size={24} />
          </IconContainer>
          <AboutUsText> Política de privacidade </AboutUsText>
        </AboutUsOption>
      </AboutUsOptionsContainer>
    </AboutUsContainer>
  )
}
