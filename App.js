import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import {setUserData} from './Src/Store/Slices/AuthSlice';

const App = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const data = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const getUserData = async () => {
    try {
      const userData = await EncryptedStorage.getItem('ISLOGIN');

      if (userData) {
        dispatch(setUserData(userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <NavigationContainer>
      {data ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
