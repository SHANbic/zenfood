import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsList = ({ title }) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
