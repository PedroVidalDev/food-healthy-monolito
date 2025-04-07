import { useState } from 'react'
import { requestLocationPermission } from '@services/geolocationService'
import Geolocation from 'react-native-geolocation-service'

export const useGeolocation = () => {
  const [location, setLocation] = useState('')

  const getCurrentLocation = async () => {
    console.log('Requesting location permission...')
    const granted = await requestLocationPermission()

    if (granted) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log('Location coordinates:', latitude, longitude)
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`)
        },
        (error) => {
          console.error('Error getting location:', error.message)
          setLocation('Unable to get location')
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      )
    } else {
      console.log('Location permission denied')
      setLocation('Location permission denied')
    }

    console.log('Location:', location)
  }

  return { location, getCurrentLocation }
}
