import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';

const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Png/animal.png')}
      />
      <InputBox
        placeholder="Enter your name"
        label="Name"
        customInputStyles={{marginBottom: 5}}
      />
      <InputBox
        placeholder="Enter your email id"
        label="Email"
        customInputStyles={{marginBottom: 5}}
      />
      <InputBox placeholder="Enter your mobile number" label="Mobile number" />
      <InputBox placeholder="Enter your password" label="Passoword" />
      <InputBox
        placeholder="Enter your confirm password"
        label="Confirm Passoword"
      />
      <Button title="Sign up" />

      <Text style={styles.account}>Already have an account ?</Text>
      <Text style={styles.signUp} onPress={() => navigation.navigate('Login')}>
        Login
      </Text>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    flex: 1,
    justifyContent: 'center',
  },
  account: {
    textAlign: 'left',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  signUp: {
    textAlign: 'left',
    fontSize: 14,
    color: 'blue',
  },
  logo: {
    width: 120,
    height: 95,
    alignSelf: 'center',
  },
});
