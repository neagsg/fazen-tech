import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1dd1a1;
  width: 100%;
  height: 82px;
  padding: 16px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
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
  align-items: center;
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
