import { StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.transparent,
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 50
    }
});

export default styles;