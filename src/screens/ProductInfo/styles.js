import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  /* background-color: #1dd1ff; */
`;

export const ProductImage = styled.Image`
  height: 300px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 64px;
`;

export const Price = styled.Text`
  font-size: 32px;
`;

export const AddToCart = styled.TouchableOpacity`
  position: absolute;
  background-color: #1dd1a1;
  flex-direction: row;
  padding: 16px 22px;
  border-radius: 8px;
  bottom: 20px;
`;

export const AddToCartTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-left: 8px;
`;
