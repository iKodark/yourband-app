import { StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-end',
        // backgroundColor: colors.lead,
        // marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 5
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});

export default styles;