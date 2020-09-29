import { StyleSheet } from 'react-native';
import { metrics } from '../../Styles';

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },

    form: {
        paddingHorizontal: metrics.padding.form.horizontal.default
    },

    logo: {
        top: 0,
        width: 150,
        height: 150
    },

    buttonSubmit: {
        marginTop: 20
    },
});

export default styles;