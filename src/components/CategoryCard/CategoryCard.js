import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({product}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={{uri: product.strCategoryThumb}}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{product.strCategory} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
