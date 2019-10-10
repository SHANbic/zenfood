import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={styles.view}>
        <Text style={styles.text}>{result.name}</Text>
        <Text>Note : {result.rating}/5</Text>
        <Text>{result.review_count} avis</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 120,
    marginVertical: 5,
    borderRadius: 3
  },
  text: {
    fontWeight: 'bold'
  },
  view: {
    alignItems: 'center'
  },
  container: {
    marginLeft: 15
  }
});

export default ResultDetail;
