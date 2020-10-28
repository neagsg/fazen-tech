import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Cart, Count } from './styles';

const HeaderCart = ({ counter }) => {
  return (
    <Cart>
      <Count>{counter}</Count>
      <Icon name="shopping-cart" size={22} color="#fff" />
    </Cart>
  );
};

export default HeaderCart;
