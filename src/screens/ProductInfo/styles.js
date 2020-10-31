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
  color: #34495e;
  margin: 8px 0;
`;

export const Price = styled.Text`
  font-size: 32px;
  color: #576574;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #576574;
  margin: 22px 16px;
  line-height: 32px;
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
