import React from 'react';
import {
  Container,
  Wrapper,
  Logo,
  Label,
  Input,
  Submit,
  TextSubmit,
  SignUp,
  NextPage,
  TitleButton,
} from './styles';
import Header from '../../components/Header';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Header title="Entrar" />
      <Wrapper>
        <Logo />
        <Label>E-mail</Label>
        <Input placeholder="E-mail" autoCapitalize="none" autoCorrect={false} />
        <Label>Senha</Label>
        <Input placeholder="Senha" autoCapitalize="none" autoCorrect={false} />
        <Submit onPress={() => alert('função não criada')} activeOpacity={0.7}>
          <TextSubmit>Entrar</TextSubmit>
        </Submit>
        <SignUp
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.7}>
          <TitleButton>Não tem cadastro?</TitleButton>
        </SignUp>
        <NextPage onPress={() => navigation.navigate('Home')}>
          <TitleButton>Ir para próxima página sem cadastro</TitleButton>
        </NextPage>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
