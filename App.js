import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen'

const Stack = createStackNavigator();
const App = () => {
  const options = {
    headerStyle: {
      backgroundColor: '#FDC12A',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 24,
    },
    headerRight: () => (
      <View>
        <Text style={styles.text}>Dav's App</Text>
      </View>
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'FAKEST NEWS'}
          component={FirstScreen}
          options={() => options}
        />
        <Stack.Screen 
        name='Second Screen'
        component={SecondScreen}
        options={() => options}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
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
