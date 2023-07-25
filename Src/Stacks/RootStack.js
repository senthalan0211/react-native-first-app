import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from '../Screens/AuthScreens/AuthPage';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthPage" component={AuthPage} />
    </Stack.Navigator>
  );
};

export default RootStack;
