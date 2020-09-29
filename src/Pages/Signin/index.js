import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Async
} from 'react-native';
import {Formik} from 'formik';

import Auth from '../../Templates/Auth';
import { Button, Input, Notify } from '../../Components';
import styles from './styles';
import { signin as Validation } from '../../Validations';
import api from '../../Services/Api';

import { setToken, setStorage } from '../../Services/AsyncStorage';

export default function Signin ({ navigation }) {

  const initialValues = {
    login: '',
    password: ''
  };

  const submit = async (data) => {
    // navigation.navigate('Dashboard');
    api.post('/signin', {
      login: data.login,
      password: data.password
    })
    .then(res => {

      const {data, message} = res.data;
      Notify(message, 'success');

      setStorage('user', data.user);
      setToken(data.token);

      navigation.navigate('Dashboard');
    })
    .catch(err => {

      const { message } = err.response.data;
      Notify(message, 'error');
    })
  }

  const renderForm = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit
  }) => (
    <View style={styles.form}>
      
      <Input
        name="login"
        label="Email or Username"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.login}
        error={touched.login && errors.login}
      />

      <Input
        name="password"
        label="Password"
        autoCompleteType="password"
        secureTextEntry={true}
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.password}
        error={touched.password && errors.password}
      />

      <Button action={handleSubmit} style={styles.buttonSubmit}>
        Log in
      </Button>

    </View>
  );

  return (
    <Auth styleLogo={styles.logo} typeLogo="symbol" navigation={navigation} back={true} >

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.container}>
          <ScrollView>
            <View>

              <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={Validation}
              >
                {renderForm}
              </Formik>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>

    </Auth>
  );
};