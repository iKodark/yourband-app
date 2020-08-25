import React from 'react';
import { Text, Button, TouchableOpacity } from 'react-native';

import Auth from '../../Templates/Auth';
import styles from './styles';

const Main = ({ navigation }) => (
  <Auth>
    <Button
      style={styles.button}
      title="Signin"
      onPress={() => navigation.navigate('Signin') }
    />
    <Text>don't have an account?</Text>
    <Button 
      title="Signup"
      onPress={() => navigation.navigate('Signup') }
    />
  </Auth>
);

export default Main;