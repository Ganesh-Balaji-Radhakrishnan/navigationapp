import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native'
import React from 'react'

import CategoryGridTitle from '../components/CategoryGridTitle'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoriesMeals',
            params: { categoryId: itemData.item.id },
          })
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  /* headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor, */
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
})

/*  <View style={styles.container}>
      <Text>This is CategoriesScreen</Text>
      <Button
        title="click to meals"
        onPress={() => {
          //else props.navigation.navigate('SomeIdentifier');
          props.navigation.navigate({ routeName: 'CategoriesMeals' })
        }}
      />
    </View> */
