import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
      <View style={styles.view}>
        <View style={styles.rating}>
          <Text style={styles.textCenter}>Note : {result.rating}/5</Text>
          <Text style={styles.textCenter}>{result.review_count} avis</Text>
        </View>
        <Text style={styles.text}>
          {result.location.address1}, {result.location.city}{' '}
          {result.location.zip_code}
        </Text>
        <Text style={styles.text}>
          {result.display_phone.replace('+33 ', '0')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '900',
    fontStyle: 'italic'
  },
  view: {
    marginLeft: 15
  },
  image: {
    width: 320,
    height: 240,
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 15
  },
  text: {
    fontSize: 16
  },
  textCenter: {
    textAlign: 'center',
    marginRight: 15,
    fontSize: 22,
    fontWeight: '700'
  },
  rating: {
    marginBottom: 15
  }
});

export default ResultScreen;
