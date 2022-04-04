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
    MealDetail:  MealDetailScreen, //this is the short format of pairing key value to the screen name
  },
  {
    /*initialRouteName: 'MealDetail'*/
    //initialRouteName make the app starts with that screen which makes the navigation void
    mode: 'modal',
    defaultNavigationOptions: { //it gets overwritten in the screen page
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
