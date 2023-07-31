import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../Screens/MainScreens/FirstScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashBoard" component={FirstScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
