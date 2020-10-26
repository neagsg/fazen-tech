import React from 'react';
import { View, Text } from 'react-native';

const ProductInfo = ({ route }) => {
  const { product } = route.params;
  return (
    <View>
      <Text>Product</Text>
      {console.log(product.image)}
    </View>
  );
};

export default ProductInfo;
