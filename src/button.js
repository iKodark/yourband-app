import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button ({ children, type, style, textStyle, action }) {

    const openModal = () => {};

    return (
        <>
            <TouchableOpacity
            style={[
                styles.container,
                style,
                type === 'outline' ? styles[`button-${type}`] : {},
            ]}
            onClick={openModal}
            >
                <Text style={[
                    styles.text,
                    textStyle,
                    type === 'outline' ? styles[`text-${type}`] : {},
                ]}>
                    { children }
                </Text>
            </TouchableOpacity>


            <Modal openModal={openModal}> </Modal>
        </>
    );
};