import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen.js'
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen.js'
import MealDetailScreen from '../screens/MealDetailScreen.js'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
  {
    //identifier:property
    Categories: { screen: CategoriesScreen },
    CategoriesMeals: { screen: CategoriesMealsScreen },
    //long format for using identifier:property pair
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
)

export default createAppContainer(MealsNavigator)
