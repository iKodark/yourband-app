import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: metrics.statusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default styles;