import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yooo!! First APP</Text>
       <Button 
       title='Push'
       onPress={() => navigation.navigate('Second Screen', {name: 'Brooo'})}
       />
    </View>
   
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
});
