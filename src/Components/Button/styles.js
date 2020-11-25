import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../Styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: metrics.padding.button.vertical.default,
        paddingHorizontal: metrics.padding.button.horizontal.long,
        borderRadius: metrics.radius.button.default,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: fonts.big
    },

    'button-fill': {
        backgroundColor: colors.primary,
        paddingVertical: metrics.padding.button.vertical.default,
        paddingHorizontal: metrics.padding.button.horizontal.long,
        borderRadius: metrics.radius.button.default,
        alignItems: 'center',
        justifyContent: 'center'
    },

    'text-fill': {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: fonts.big
    },

    'button-outline': {
        backgroundColor: colors.transparent,
        borderWidth: 1,
        borderColor: colors.primary
    },

    'text-outline': {
        color: colors.primary
    }
});

export default styles;