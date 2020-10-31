import React from 'react';
import {
  Container,
  Wrapper,
  Logo,
  Label,
  Input,
  Submit,
  TextSubmit,
  NextPage,
  TitleButton,
} from './styles';
import Header from '../../components/Header';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Header title="Criar conta" />
      <Wrapper>
        <Logo />
        <Label>Nome</Label>
        <Input placeholder="Nome" autoCapitalize="none" autoCorrect={false} />
        <Label>E-mail</Label>
        <Input placeholder="E-mail" autoCapitalize="none" autoCorrect={false} />
        <Label>Senha</Label>
        <Input placeholder="Senha" autoCapitalize="none" autoCorrect={false} />
        <Submit onPress={() => alert('função não criada')} activeOpacity={0.7}>
          <TextSubmit>Cadastrar</TextSubmit>
        </Submit>
        <NextPage onPress={() => navigation.navigate('SignIn')}>
          <TitleButton>Retornar ao login</TitleButton>
        </NextPage>
        <NextPage onPress={() => navigation.navigate('Home')}>
          <TitleButton>Ir para próxima página sem cadastro</TitleButton>
        </NextPage>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
