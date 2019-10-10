import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.searchIconStyle} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="recherche"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 15,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 18
  },
  searchIconStyle: {
    marginHorizontal: 10,
    fontSize: 30,
    marginVertical: 10
  }
});

export default SearchBar;
