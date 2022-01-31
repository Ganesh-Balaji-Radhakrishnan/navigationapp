import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is CategoriesMealsScreen</Text>
      <Button title="to Meal Detail" onPress={()=>{
          props.navigation.navigate({routeName : 'MealDetail'})
      }}/>
    </View>
  );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});
