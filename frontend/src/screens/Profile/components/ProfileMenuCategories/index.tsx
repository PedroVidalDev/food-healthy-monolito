import { useAppNavigation } from '@hooks/useAppNavigation'

import { ProfileMenuOption, profileMenuOptions } from './constants'

import { Option } from '@components/Option'

import { ProfileCategoriasList } from './styles'

export const ProfileMenuCategories = () => {
  const { navigate } = useAppNavigation()

  const handlePress = (option: ProfileMenuOption) => {
    navigate(option.screen as never)
  }

  return (
    <ProfileCategoriasList>
      {profileMenuOptions.map((option, index) => (
        <Option
          icon={option.icon}
          onPress={() => handlePress(option)}
          title={option.title}
          description={option.subtitle}
          key={index}
        />
      ))}
    </ProfileCategoriasList>
  )
}
