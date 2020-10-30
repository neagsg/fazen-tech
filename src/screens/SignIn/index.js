import React from 'react';
import {
  Container,
  Logo,
  Label,
  Input,
  Submit,
  TextSubmit,
  SignUp,
  NextPage,
  TitleButton,
} from './styles';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Logo />
      <Label>E-mail</Label>
      <Input placeholder="E-mail" autoCapitalize="none" autoCorrect={false} />
      <Label>Senha</Label>
      <Input placeholder="Senha" autoCapitalize="none" autoCorrect={false} />
      <Submit onPress={() => alert('função não criada')} activeOpacity={0.7}>
        <TextSubmit>Entrar</TextSubmit>
      </Submit>
      <SignUp onPress={() => alert('SignUp')} activeOpacity={0.7}>
        <TitleButton>Não tem cadastro?</TitleButton>
      </SignUp>
      <NextPage onPress={() => navigation.navigate('Home')}>
        <TitleButton>Ir para próxima página sem cadastro</TitleButton>
      </NextPage>
    </Container>
  );
};

export default SignIn;
