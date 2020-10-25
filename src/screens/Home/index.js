import React from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  Logo,
  Wrapper,
  Content,
  ProductImage,
  ProductInfo,
  Title,
  Price,
} from './styles';

import api from '../../services/fakeApi';

const Home = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          {api.map((product) => (
            <Content key={product.id}>
              <ProductImage source={product.image} />
              <ProductInfo>
                <Title>{product.title}</Title>
                <Price>{product.price}</Price>
              </ProductInfo>
            </Content>
          ))}
        </ScrollView>
      </Wrapper>
    </Container>
  );
};

export default Home;
