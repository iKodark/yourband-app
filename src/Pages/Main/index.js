import React from 'react';
import { Text, View } from 'react-native';

import Auth from '../../Templates/Auth';
import styles from './styles';

import { Button } from '../../Components';

const Main = ({ navigation }) => (
  <Auth>
    <View style={styles.contentButton}>
      <Button action={() => navigation.navigate('Signin') }>
        Signin
      </Button>

      <Text style={styles.text}>don't have an account?</Text>

      <Button type="outline" action={() => navigation.navigate('Signup') }>
        Signup
      </Button>
    </View>
  </Auth>
);

export default Main;