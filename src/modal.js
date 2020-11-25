import React from 'react';

import { View } from 'react-native';

import styles from './styles';

export default function Button ({ children, openModal }) {

    const openModal = () => {

        setOpacity(true)
    }

    return (
        <>
            <View onPress={action}>
                    { children }
            </View>
        </>
    );
};