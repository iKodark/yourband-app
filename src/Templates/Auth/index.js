import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Auth = ({ children, styleLogo, typeLogo, navigation, back }) => (
  <View style={styles.container}>
    <Header styleLogo={styleLogo} typeLogo={typeLogo} navigation={navigation} back={back} />
    {children}
    <Footer />
  </View>
);

export default Auth;