import EncryptedStorage from 'react-native-encrypted-storage';
import {setUserData} from '../Store/Slices/AuthSlice';

export const storeUserData = async (dispatch, data) => {
  try {
    await EncryptedStorage.setItem('ISLOGIN', JSON.stringify(data));
    dispatch(setUserData(data));
  } catch (error) {
    console.log('error');
  }
};
