import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>result show screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultScreen;
