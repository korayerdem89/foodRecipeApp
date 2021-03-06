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
  const renderCategory = ({item}) => (
    <CategoryCard product={item} />
  ); 
  return (
    <SafeAreaView style={{backgroundColor:'#fea501'}}>
      <FlatList
        keyExtractor={item => item.idCategory}
        data={data.categories}
        renderItem={renderCategory}
      />
    </SafeAreaView>
  );
};

export default Categories;
