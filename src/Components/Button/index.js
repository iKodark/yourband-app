import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button ({ children, type, style, textStyle, action }) {

    return (
        <>
            <TouchableOpacity
            style={[
                styles.container,
                style,
                type === 'outline' ? styles[`button-${type}`] : {},
            ]}
            onPress={action}
            >
                <Text style={[
                    styles.text,
                    textStyle,
                    type === 'outline' ? styles[`text-${type}`] : {},
                ]}>
                    { children }
                </Text>
            </TouchableOpacity>
        </>
    );
};