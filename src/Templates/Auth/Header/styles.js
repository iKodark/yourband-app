import { StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.transparent,
    },

    image: {
        top: 70,
        width: 250,
        height: 250
    },

    back: {
        position: "absolute",
        left: 20,
        top: 50
    }
});

export default styles;