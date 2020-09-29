import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {Formik} from 'formik';

import Auth from '../../Templates/Auth';
import { Button, Input, Notify } from '../../Components';
import styles from './styles';
import { signup as Validation } from '../../Validations';
import api from '../../Services/Api';

export default function Signup ({ navigation }) {

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    repeat_password: ''
  };

  const submit = (data) => {

    api.post('/signup', {
      email: data.email,
      name: data.name,
      password:data.password,
      username:data.username
    })
    .then(res => {

      const {data, message} = res.data;
      Notify(message, 'success');

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
        name="name"
        label="Name"
        autoCompleteType="name"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.name}
        error={touched.name && errors.name}
      />

      <Input
        name="username"
        label="Username"
        autoCompleteType="username"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.username}
        error={touched.username && errors.username}
      />

      <Input
        name="email"
        label="Email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCompleteType="email"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.email}
        error={touched.email && errors.email}
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

      <Input
        name="repeat_password"
        label="Password Repeat"
        secureTextEntry={true}
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.repeat_password}
        error={touched.repeat_password && errors.repeat_password}
      />

      <Button action={handleSubmit} style={styles.buttonSubmit}>
        Register
      </Button>

    </View>
  );

  return (
    <Auth styleLogo={styles.logo} typeLogo="symbol" navigation={navigation} back={true} >

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : Platform.OS==='android'} style={styles.container}>
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