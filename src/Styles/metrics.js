import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  padding: {
    button: {
      horizontal: {
        default: 30,
        long: 80
      },
      vertical: {
        default: 20
      }
    },

    form: {
      horizontal: {
        default: 30
      }
    }
  },
  radius: {
    button: {
      default: 100
    },
    input: {
      default: 20
    }
  }
};

export default metrics;