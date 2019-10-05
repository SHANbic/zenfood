import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 30,
    borderRadius: 5,
    height: 50
  }
});

export default SearchBar;
