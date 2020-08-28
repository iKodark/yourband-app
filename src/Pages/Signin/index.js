import React from 'react'; 
import { View, Alert, Text } from 'react-native';

import { Button, Input } from '../../Components';

import { Formik } from 'formik';

import Auth from '../../Templates/Auth';

export default function Signin() {

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    repeat_password: ''
  };

  const submit = (values) => {
    Alert.alert(JSON.stringify(values));
    console.log(values);
  }

  const renderForm = ({ handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, touched, errors }) => (
    <View>
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
        value={values.name}
        error={touched.name && errors.name}
      />

      <Button action={handleSubmit}>
        Register
      </Button>
    </View>
  )

  return (
    <Auth>

      <Formik
        initialValues={initialValues}
        onSubmit={submit}
      >
        {renderForm}
      </Formik>

    </Auth>
  );

}