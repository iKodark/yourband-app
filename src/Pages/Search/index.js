import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

const Search = () => (
  <Dashboard>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
        <ScrollView>

            <Text style={styles.text}>Search</Text>

        </ScrollView>
    </KeyboardAvoidingView>
  </Dashboard>
);

export default Search;