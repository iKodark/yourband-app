import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  buttonText: {
    color: "#fff"
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

export default styles;