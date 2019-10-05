import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.searchIconStyle} name="search" size={30} />
      <TextInput style={styles.inputStyle} placeholder="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 30,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    flex: 1
  },
  searchIconStyle: {
    marginHorizontal: 10
  }
});

export default SearchBar;
