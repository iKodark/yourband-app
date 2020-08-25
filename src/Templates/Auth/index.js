import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Auth = ({children}) => (
  <View style={styles.container}>
    <Header />
    {children}
    <Footer />
  </View>
);

export default Auth;