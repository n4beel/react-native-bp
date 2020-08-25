import AsyncStorage from '@react-native-community/async-storage';

export const validateEmail = (email) => {
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const validateFullName = (name) => {
  const regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  return regex.test(String(name).toLowerCase());
};

export const getStorageItem = async (key) => {
  try {
    let item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  } catch (e) {
    console.log('Error in getting key -->', e);
    return null;
  }
};

export const setStorageItem = async (key, value) => {
  try {
    let item = await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log('Error in setting key -->', e);
    return null;
  }
};
