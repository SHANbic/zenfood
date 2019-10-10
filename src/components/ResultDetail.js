import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View>
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
    marginHorizontal: 5,
    borderRadius: 3
  },
  text: {
    fontWeight: 'bold'
  },
  view: {
    alignItems: 'center'
  }
});

export default ResultDetail;
