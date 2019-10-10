import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
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
