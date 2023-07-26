import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/AuthScreens/Login';
import SignUp from '../Screens/AuthScreens/SignUp';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default RootStack;
