import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'paris'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Couldn't fetch your datas");
    }
  };

  useEffect(() => {
    searchApi('sushi');
  }, []);

  return [searchApi, results, errorMessage];
};
