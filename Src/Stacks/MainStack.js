import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../Screens/DashboardScreens/FirstScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
