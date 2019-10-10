import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };
  console.log('RESULTS', results[0]);
  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList results={filterResultsByPrice('€')} title="Fin de mois" />
        <ResultsList results={filterResultsByPrice('€€')} title="Entre amis" />
        <ResultsList
          results={filterResultsByPrice('€€€')}
          title="Le grand jeu"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
