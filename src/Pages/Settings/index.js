import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

const Settings = () => (
  <Dashboard>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
        <ScrollView>

            <Text style={styles.text}>Settings</Text>

        </ScrollView>
    </KeyboardAvoidingView>
  </Dashboard>
);

export default Settings;