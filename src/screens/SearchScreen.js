import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice('€')} title="cost effective" />
      <ResultsList results={filterResultsByPrice('€€')} title="bit pricier" />
      <ResultsList results={filterResultsByPrice('€€€')} title="big spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
