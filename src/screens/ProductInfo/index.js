import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Wrapper,
  ProductImage,
  Title,
  Price,
  AddToCart,
  AddToCartTitle,
} from './styles';

const ProductInfo = ({ route }) => {
  const { product } = route.params;
  return (
    <Container>
      <Wrapper>
        {/* <Title>Product</Title> */}
        <ProductImage source={product.image} />
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
        <AddToCart onPress={() => alert('Add')}>
          <Icon name="shopping-cart" size={22} color="#fff" />
          <AddToCartTitle>ADICIONAR AO CARRINHO</AddToCartTitle>
        </AddToCart>
      </Wrapper>
    </Container>
  );
};

export default ProductInfo;
