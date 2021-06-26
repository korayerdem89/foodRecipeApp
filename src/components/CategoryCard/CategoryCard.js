import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({product}) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image source={{uri: product.strCategoryThumb}} style={styles.image} />
        <Text>{product.strCategory} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
