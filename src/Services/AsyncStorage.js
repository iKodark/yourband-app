import AsyncStorage from '@react-native-community/async-storage';

const setStorage = async (key, value) => {

  try {

    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {

    console.log('err', e);
  }
}

const setToken = async (value) => {

  try {
    console.log('SET', value);
    await AsyncStorage.setItem('token', value)
  } catch (e) {

    console.log('err', e);
  }
}

const getToken = async () => {

  try {

    const value = await AsyncStorage.getItem('token')
    console.log('GET', value);
    return value;
  } catch(e) {

    console.log('Deu erro');
    return e;
  }
}

export {
    setStorage,
    setToken,
    getToken
}