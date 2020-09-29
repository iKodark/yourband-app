import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  text: {
    color: colors.light,
    marginTop: 40,
    marginBottom: 10
  },

  image: {
    width: 190,
    height: 190
  },

  item: {
    padding: 5
  }
});

export default styles;