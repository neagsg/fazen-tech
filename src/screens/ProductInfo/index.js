import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import HeaderCart from '../../components/HeaderCart';
import { sendEmail } from '../../utils/sendEmail';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Wrapper,
  ProductImage,
  Title,
  Price,
  Description,
  AddToCart,
  AddToCartTitle,
  SendEmail,
  ActionButton,
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
        <Description>{product.description}</Description>
        <ActionButton>
          <AddToCart onPress={handleCount}>
            <Icon name="shopping-cart" size={22} color="#fff" />
            <AddToCartTitle>ADICIONAR AO CARRINHO</AddToCartTitle>
          </AddToCart>
          <SendEmail
            onPress={() =>
              sendEmail('test@gmail.com', product.title, [
                count,
                product.price,
                product.description,
              ]).then(() => {
                console.log('Our email successful provided to device mail ');
              })
            }>
            <IconMI name="send" size={22} color="#fff" />
          </SendEmail>
        </ActionButton>
      </Wrapper>
    </Container>
  );
};

export default ProductInfo;
