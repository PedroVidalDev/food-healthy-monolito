import { useState } from 'react'
import Geolocation from 'react-native-geolocation-service'
import { requestLocationPermission } from '@services/geolocationService'

export const useGeolocation = () => {
  const [location, setLocation] = useState('')

  const getCurrentLocation = async () => {
    console.log('Requesting location permission...')
    const granted = await requestLocationPermission()

    if (granted) {
      console.log('Getting current position...')

      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Inside getCurrentPosition callback')
          console.log('Position:', position)
          const locationText = `${position.coords.latitude}, ${position.coords.longitude}`
          setLocation(locationText)
        },
        (error) => {
          console.log('Error:', error.code, error.message)
          setLocation('Location unavailable')
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      )
    } else {
      setLocation('Permission denied')
    }

    console.log('Location:', location)
  }

  return { location, getCurrentLocation }
}
