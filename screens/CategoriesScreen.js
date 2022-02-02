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

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoriesMeals',
            params: { categoryId: itemData.item.id },
          })
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
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
