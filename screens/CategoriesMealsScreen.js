import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId')

  const filteredMeal = CATEGORIES.find((cat) => cat.id === categoryId)
  return (
    <View style={styles.container}>
      <Text>This is CategoriesMealsScreen</Text>
      <Text>{filteredMeal.title}</Text>
      <Button
        title="to Meal Detail"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}

/* CategoriesMealsScreen.nagvigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const filteredMeal = CATEGORIES.find((cat) => cat.id === categoryId)

  return { headerTitle: filteredMeal.title }
} */

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const filteredMeal = CATEGORIES.find((cat) => cat.id === categoryId)

  return {
    headerTitle: filteredMeal.title,
  }
}

export default CategoriesMealsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
})
