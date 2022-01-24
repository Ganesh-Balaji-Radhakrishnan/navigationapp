import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation"

import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen.js"
import MealDetailScreen from "../screens/MealDetailScreen.js"

const MealsNavigator = createStackNavigator({
    //identifier:property
    CategoriesMeals : CategoriesMealsScreen,
    Categories : CategoriesScreen,
    //long format for using identifier:property pair
    MealDetail: {
        screen : MealDetailScreen
    }
})

export default createAppContainer(MealsNavigator)