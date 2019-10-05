import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.js';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar term={term} onTermChange={setTerm} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
