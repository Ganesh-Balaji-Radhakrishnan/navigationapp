import React, { useState } from 'react'
import { Text, View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'
//react-native-screens helps to replicate native navigation performances
import MealsNavigator from './navigation/MealsNavigator'

/* enhance performance */
enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return <MealsNavigator />
}
