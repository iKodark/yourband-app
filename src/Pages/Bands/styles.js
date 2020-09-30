import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: 190,
    marginHorizontal: 5,
    marginBottom: 20
  }
});

export default styles;