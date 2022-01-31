import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is CategoriesScreen</Text>
      <Button title="click to meals" onPress={()=>{
          //else props.navigation.navigate('SomeIdentifier');
          props.navigation.navigate({routeName : 'CategoriesMeals'})
      }}/>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});
 