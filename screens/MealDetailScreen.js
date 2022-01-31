import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});
