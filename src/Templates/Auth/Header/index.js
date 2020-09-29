import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import logo from '../../../assets/logo_transparent.png';
import symbol from '../../../assets/symbol_transparent.png';
import { ButtonIcon } from '../../../Components';


const images = {
  logo,
  symbol
}

const Header = ({ styleLogo, typeLogo, navigation, back }) => (
  <View style={styles.container}>
    {back ? (
      <ButtonIcon action={ () => navigation.navigate('Main') } nameIcon="arrow-left" styleButton={ styles.back } />
    ) : null}
    
    <Image style={[ styles.image, styleLogo ]} source={typeLogo ? images[typeLogo] : images['logo']} />
  </View>
);

export default Header;