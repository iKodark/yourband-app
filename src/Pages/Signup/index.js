import React from 'react';
import styles from './styles';
import { View, Button, Text } from 'react-native';

const Signup = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Signup</Text>
    <Button 
      title="Voltar para Signin"
      onPress={() => navigation.navigate('Signin') }
    />

    <Button 
      title="Ir para Main"
      onPress={() => navigation.navigate('Main') }
    />
  </View>
);

Signup.navigationOptions = {
  title: 'Signup',
}


export default Signup;