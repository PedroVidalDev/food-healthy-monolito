import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HelpHeader } from './components/HelpHeader'

import { HelpContainer } from './styles'

export const Help = () => {
  const insents = useSafeAreaInsets()

  return (
    <HelpContainer statusBarHeight={insents.top}>
      <HelpHeader />
    </HelpContainer>
  )
}
