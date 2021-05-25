import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SecondScreen = (props) => {
  const name = props.route.params.name
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yooo!! {props.route.params.name}</Text>
    </View>
  )
}

export default SecondScreen

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
