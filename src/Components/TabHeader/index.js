import React, { useRef } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import ButtonIcon from '../../Components/ButtonIcon';

export default function TabHeader ({ navigation, buttonAction, title }) {

    return (
        <View style={[
            styles.container
        ]}>
            <ButtonIcon action={ () => navigation.goBack() } nameIcon="arrow-left" styleButton={ styles.back } />

            <Text style={ styles.title }>{title}</Text>

            {buttonAction}
        </View>
    );
};