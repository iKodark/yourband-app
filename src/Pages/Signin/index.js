import React, { useRef } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import {Formik} from 'formik';

import axios from 'axios';

import Auth from '../../Templates/Auth';
import { Button, Input } from '../../Components';
import styles from './styles';
import { signin as Validation } from '../../Validations';

export default function Signin ({ navigation }) {

 

  const initialValues = {
    email: '',
    password: ''
  };

  const submit = (data) => {
    axios.post('http://localhost:9000/api/signin', { //Trocar o localhost pelo ip local da maquina para funcionar
      
    username:data.username,
    password:data.password

  }).then((response) =>{
     console.log(response);
    }).catch((err) =>{
      return console.log(err);
    })  
    console.log(data);
  }

  const renderForm = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    isValid,
    isSubmitting
  }) => (
    <View style={styles.form}>
      
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