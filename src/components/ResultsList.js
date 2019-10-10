import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    fontWeight: 'bold',
    marginLeft: 15
  },
  list: {
    marginTop: 20
  }
});

export default ResultsList;
