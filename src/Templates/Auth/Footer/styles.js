import { StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.transparent,
        padding: 15
    },
    copyright: {
        color: colors.light
    }
});

export default styles;