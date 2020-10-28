import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import HeaderCart from '../../components/HeaderCart';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Wrapper,
  ProductImage,
  Title,
  Price,
  AddToCart,
  AddToCartTitle,
} from './styles';

const ProductInfo = ({ route, navigation }) => {
  const { product } = route.params;

  const [count, setCount] = useState(0);

  function handleCount() {
    let addValue = 1;

    setCount(count + addValue);
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </BackButton>
        <HeaderTitle>Produto</HeaderTitle>
        <HeaderCart counter={count} />
      </Header>
      <Wrapper>
        <ProductImage source={product.image} />
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
        <AddToCart onPress={handleCount}>
          <Icon name="shopping-cart" size={22} color="#fff" />
          <AddToCartTitle>ADICIONAR AO CARRINHO</AddToCartTitle>
        </AddToCart>
      </Wrapper>
    </Container>
  );
};

export default ProductInfo;
