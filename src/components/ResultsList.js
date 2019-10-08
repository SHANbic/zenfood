import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>{results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
