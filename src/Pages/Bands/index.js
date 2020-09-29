import React, { useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, Image } from 'react-native';

import api from '../../Services/Api';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

export default function Bands () {

  useEffect(() => {

    api.get('/band')
    .then(res => {

      console.log('OK', res);
    })
    .catch(err => {

      console.log('ERROR', err);
    })
  }, []);

  return (
    <Dashboard>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
          <Text> My Bands </Text>
      </KeyboardAvoidingView>
    </Dashboard>
  );
}