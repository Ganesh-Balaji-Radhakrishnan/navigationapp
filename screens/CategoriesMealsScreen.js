import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CategoriesMealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is CategoriesMealsScreen</Text>
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
