import { StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.lead
    },

    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});

export default styles;