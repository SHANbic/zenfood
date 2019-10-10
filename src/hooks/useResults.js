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
      setErrorMessage("Impossible de récupérer les données");
    }
  };

  useEffect(() => {
    searchApi('');
  }, []);

  return [searchApi, results, errorMessage];
};
