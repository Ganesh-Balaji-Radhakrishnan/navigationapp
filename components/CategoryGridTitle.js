import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryGridTitle = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})
