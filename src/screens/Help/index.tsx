import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HelpHeader } from './components/HelpHeader'
import { HelpCategories } from './components/HelpCategories'

import { HelpContainer } from './styles'

export const Help = () => {
  const insents = useSafeAreaInsets()

  return (
    <HelpContainer statusBarHeight={insents.top}>
      <HelpHeader />
      <HelpCategories />
    </HelpContainer>
  )
}
