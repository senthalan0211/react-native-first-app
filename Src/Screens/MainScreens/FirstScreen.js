import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../Components/CustomText';
import Button from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../Store/Slices/AuthSlice';
import {storeUserData} from '../../Utilities/Methods';
import EncryptedStorage from 'react-native-encrypted-storage';

const FirstScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      storeUserData(dispatch, null);
      EncryptedStorage.removeItem('ISLOGIN');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomText content="Dashboard" />
      <Button title="logout" onPress={handleLogout} />
      {/* <CustomText content="Move to login" />
      <Button
        title="Move to Login page"
        onPress={() => navigation.navigate('Login')}
      /> */}
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
});
