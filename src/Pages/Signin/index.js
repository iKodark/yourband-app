import React from 'react';
import styles from './styles';
import { View, Button, Text } from 'react-native';

const Signin = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Signin</Text>
    <Button 
      title="Ir para Signup"
      onPress={() => navigation.navigate('Signup') }
    />

    <Button 
      title="Ir para Main"
      onPress={() => navigation.navigate('Main') }
    />
  </View>
);

Signin.navigationOptions = {
  title: 'Signin',
}

export default Signin;