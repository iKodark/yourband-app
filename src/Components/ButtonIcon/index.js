import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../Styles';
import styles from './styles';

export default function ButtonIcon ({styleButton, action, styleIcon, sizeIcon, colorIcon, nameIcon}) {

    return (
        <TouchableOpacity
            style={[ styles.container, styleButton ]}
            onPress={action}
        >
            <Icon
                style={[ styles.icon, styleIcon ]}
                name={nameIcon}
                size={ sizeIcon ? sizeIcon : 25 }
                color={ colorIcon ? colorIcon : colors.primary }
            />
        </TouchableOpacity>
    );
};