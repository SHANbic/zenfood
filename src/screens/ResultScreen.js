import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };
  return (
    <View>
      <Text>result show screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultScreen;
