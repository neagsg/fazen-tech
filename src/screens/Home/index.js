import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Logo,
  Wrapper,
  Content,
  ProductImage,
  Items,
  ProductInfo,
  Title,
  Price,
} from './styles';

import api from '../../services/fakeApi';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Logo />
          {api.map((product) => (
            <Content key={product.id}>
              <Items>
                <ProductImage source={product.image} />
                <ProductInfo>
                  <Title>{product.title}</Title>
                  <Price>{product.price}</Price>
                </ProductInfo>
              </Items>
              <Icon name="chevron-right" size={22} color="#777" />
            </Content>
          ))}
        </ScrollView>
      </Wrapper>
    </Container>
  );
};

export default Home;
