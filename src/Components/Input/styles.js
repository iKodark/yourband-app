import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../Styles';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    content: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: colors.secondary,
        borderRadius: metrics.radius.input.default,
        backgroundColor: colors.transparentHalf
    },

    label: {
        position: 'absolute',
        fontSize: fonts.regular,
        display: 'flex',
        color: colors.light,
        paddingHorizontal: 15
    },

    input: {
        fontSize: fonts.input,
        color: colors.light,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },

    iconValidation: {
        position: 'absolute',
        right: 10,
        top: 20
    },

    textValidation: {
        width: '100%',
        alignItems: 'flex-end',
        right: 10,
        height: 20
    },
});

export default styles;