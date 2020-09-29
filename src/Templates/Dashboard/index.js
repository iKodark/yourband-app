import React from 'react';
import styles from './styles';
import { View } from 'react-native';
// import Footer from './Footer';
import Header from './Header';

const Dashboard = ({ children }) => (
  <View style={styles.container}>
    <Header />
    {children}
  </View>
);

export default Dashboard;