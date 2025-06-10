import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppRulesHeader } from './AppRulesHeader'

import {
  AppRulesContainer,
  AppRulesDescription,
  AppRulesMainContainer,
  AppRulesTitle,
  AppRuleTopic,
  AppRuleTopicText,
  AppRuleTopicTitle,
} from './styles'
import { APP_RULES_PRIVACY, APP_RULES_TERMS } from './constants'

export const AppRules = ({ route }) => {
  const { type } = route.params || {}

  const insents = useSafeAreaInsets()

  return (
    <AppRulesContainer statusBarHeight={insents.top}>
      <AppRulesHeader />

      <AppRulesMainContainer>
        <AppRulesTitle>
          {type === 'privacy' ? 'Política de Privacidade' : 'Termos de uso'}
        </AppRulesTitle>
        {type === 'privacy' ? (
          <AppRulesDescription>
            Esta é a política de privacidade do aplicativo, que descreve como
            coletamos, usamos e protegemos suas informações pessoais.
          </AppRulesDescription>
        ) : (
          <AppRulesDescription>
            Estes são os termos de uso do aplicativo, que estabelecem as regras
            e condições para o uso do serviço.
          </AppRulesDescription>
        )}
      </AppRulesMainContainer>
      {type === 'privacy'
        ? APP_RULES_PRIVACY.map((item, index) => (
            <AppRuleTopic key={index}>
              <AppRuleTopicTitle>{item.title}</AppRuleTopicTitle>
              <AppRuleTopicText>{item.content}</AppRuleTopicText>
            </AppRuleTopic>
          ))
        : APP_RULES_TERMS.map((item, index) => (
            <AppRuleTopic key={index}>
              <AppRuleTopicTitle>{item.title}</AppRuleTopicTitle>
              <AppRuleTopicText>{item.content}</AppRuleTopicText>
            </AppRuleTopic>
          ))}
    </AppRulesContainer>
  )
}
