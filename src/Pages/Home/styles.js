import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 5
  },

  text: {
    color: colors.light,
    marginTop: 40,
    marginBottom: 10
  },

  image: {
    width: 150,
    height: 150
  },

  contentList: {
    marginTop: 10
  },

  titleList: {
    fontSize: fonts.biggie,
    color: colors.light,
    fontWeight: 'bold',
    marginBottom: 10
  },

  list: {
    flexDirection: 'row'
  },

  item: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: 150,
    marginHorizontal: 5,
    alignItems: 'center'
  }
});

export default styles;