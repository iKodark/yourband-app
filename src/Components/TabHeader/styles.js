import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    marginBottom: 0,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.transparent
  },

  button: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: colors.transparent
  },

  buttonText: {
    color: colors.primary
  },

  title: {
    color: colors.light,
    fontSize: fonts.big,
    left: 10,
    fontWeight: '500'
  }
});

export default styles;