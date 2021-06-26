import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import config from '../../config';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';
import CategoryCard from '../components/CategoryCard';

const Categories = () => {
  const {loading, data, error} = useFetch(config.API_URL);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.idCategory}
        data={data.categories}
        renderItem={({item}) => <CategoryCard product={item} />}
      />
    </SafeAreaView>
  );
};

export default Categories;
