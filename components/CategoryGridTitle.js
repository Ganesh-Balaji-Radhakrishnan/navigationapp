import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import React from 'react'

const CategoryGridTitle = (props) => {
  let TouchableCmp = TouchableOpacity

  //we do this to prevent the opacity effect in Android and instead use ripple effect
  if( Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  return (
      //added an extra layer of View because to facilitate the styling issue in Android
      <View style={styles.gridItem}>
    <TouchableCmp style={{flex:1}} onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        {/*numberOfLines limit the number of lines to two or any given number*/}
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableCmp>
      </View>
  )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container : {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems:"flex-end",
  },
  title : {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  }
})
