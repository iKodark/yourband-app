import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Footer = () => (
  <View style={styles.container}>
    <Text style={styles.copyright}>
        © 2020 - YOURBAND - Todos os direitos reservados.
    </Text>
  </View>
);

export default Footer;