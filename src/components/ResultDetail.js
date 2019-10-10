import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name}</Text>
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
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default ResultDetail;
