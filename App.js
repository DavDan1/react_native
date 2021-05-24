import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen'

const Stack = createStackNavigator();
const App = () => {
  const name = 'MyApplication';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={name}
          component={FirstScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#892b2f',
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerRight: () => (
              <View>
                <Text>Is this working? </Text>
              </View>
            )
          })
        }
        />
        <Stack.Screen 
        name='Second Screen' 
        component={SecondScreen}
        options ={() => ({
          headerBackTitle: 'Back?'
        })}
        ></Stack.Screen>
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
