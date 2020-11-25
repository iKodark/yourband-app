import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../Styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "flex-start",
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
  },

  button: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: colors.transparent
  },

  buttonText: {
    color: colors.primary,
    fontSize: fonts.normal
  },

  modal: {
    backgroundColor: colors.lead
  },

  form: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    alignItems: 'center',
    height: metrics.screenHeight-70
  },

  groupButton: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: 20
  },

  buttonCancel: {
    backgroundColor: colors.danger
  },

  buttonForm: {
    paddingVertical: 18,
    paddingHorizontal: 0,
    width: '48%'
  },

  textButtonForm: {
    fontSize: fonts.normal
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.transparentHalf
  },

  buttonUpload: {
    marginTop: 20,
    width: '100%'
  },

  buttonEmpty: {
    backgroundColor: colors.transparentHalf
  }
});

export default styles;