import styled from 'styled-components/native';

import logoImg from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  margin: 24px 0 0 8px;
  background-color: #f5f5f0;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})`
  margin-bottom: 24px;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  padding: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-color: #c8d6e5;
  border-radius: 4px;
`;

export const Items = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  // resizeMode: 'contain',
})`
  height: 74px;
  width: 74px;
  border-radius: 37px;
`;

export const ProductInfo = styled.View`
  margin-left: 16px;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #576574;
  padding-bottom: 4px;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #8395a7;
`;
