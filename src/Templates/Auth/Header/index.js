import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import logo from '../../../assets/logo_transparent.png';

const Header = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={logo} />
  </View>
);

export default Header;