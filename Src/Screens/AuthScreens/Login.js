import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';

const Login = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Png/animal.png')}
      />
      <InputBox
        placeholder="Enter your email id"
        label="Email"
        customInputStyles={{marginBottom: 5}}
        // errors={true}
        // errorText="Please Enter all fields"
      />
      <InputBox placeholder="Enter your password" label="Passoword" />
      <Button title="Login" />

      <Text style={styles.account}>Don’t have an account ?</Text>
      <Text style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    // marginVertical: 15,
    flex: 1,
    justifyContent: 'center',
  },
  account: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  signUp: {
    textAlign: 'center',
    fontSize: 14,
    color: 'blue',
  },
  logo: {
    width: 120,
    height: 95,
    alignSelf: 'center',
  },
});
