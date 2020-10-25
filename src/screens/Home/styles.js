import styled from 'styled-components/native';

import logoImg from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  margin: 24px 0 0 8px;
  background-color: #f5f5f0;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})``;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
  padding: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-color: #c8d6e5;
  border-radius: 4px;
`;

export const ProductImage = styled.Image.attrs({
  // resizeMode: 'contain',
})`
  height: 92px;
  width: 92px;
  border-radius: 48px;
`;

export const ProductInfo = styled.View`
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;
export const Price = styled.Text`
  font-size: 16px;
`;
