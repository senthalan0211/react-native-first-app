import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';

const App = () => {
  const isLogin = useSelector(state => state.auth.isLogin);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLogin ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
