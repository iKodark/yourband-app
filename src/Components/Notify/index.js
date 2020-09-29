import Toast from 'react-native-tiny-toast';
import { colors } from '../../Styles';

export default function Notify(msg, type) {

    Toast.show(msg,{
        position: -1,
        containerStyle:{
            backgroundColor: colors.toast[type],
            borderRadius: 0,
            width: '100%'
        },
        textStyle:{
            color:'#fff',
        },
        duration: 2000,
        animation: true,
    });
}