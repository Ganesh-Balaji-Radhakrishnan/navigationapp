import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const MealDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is MealDetailScreen</Text>
      <Button
        title="go to meals category"
        onPress={() => {
          //pop to the screen before
          props.navigation.pop()
          //or props.navigation.goBack()
        }}
      />
      <Button
        title="go to Categories"
        onPress={() => {
          //pop to the screen on bottom of the stack
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
})
