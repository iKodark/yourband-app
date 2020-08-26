import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ children, type, style, textStyle, action }) => (
    <TouchableOpacity
    style={[
        styles.container,
        style,
        type ? styles[`button-${type}`] : {},
    ]}
    onPress={action}
    >
        <Text style={[
            styles.text,
            textStyle,
            type ? styles[`text-${type}`] : {},
        ]}>
            { children }
        </Text>
    </TouchableOpacity>
);

export default Button;