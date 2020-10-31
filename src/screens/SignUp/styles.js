import styled from 'styled-components/native';
import logoImg from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})`
  margin: 44px 0;
`;

export const Label = styled.Text`
  color: #8395a7;
  font-size: 18px;
  width: 80%;
  margin: 12px 0;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  height: 56px;
  width: 80%;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #1dd1a1;
  height: 56px;
  width: 80%;
  border-radius: 8px;
  margin-top: 16px;

  align-items: center;
  justify-content: center;
`;

export const TextSubmit = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const NextPage = styled.TouchableOpacity`
  margin-top: 44px;
`;

export const TitleButton = styled.Text`
  color: #1dd1a1;
  font-size: 18px;
  text-align: center;
`;
