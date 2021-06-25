import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import config from '../../config';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

import CategoryCard from '../components/CategoryCard';

const Categories = () => {
  // const {loading, data, error} = useFetch(config.API_URL);

  // const renderProduct = ({item}) => <CategoryCard product={item} />;

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }

  return <Text>Hİ {config.API_URL} </Text>;
};

export default Categories;
