import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Article = ({ article, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Second Screen', { name: article });
      }}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeftt: 10,
    paddingTop: 2,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 16,
    puddingBottom: 10,
  },
  image: {
    height: 100,
    width: Dimensions.get('window').width,
  },
});
