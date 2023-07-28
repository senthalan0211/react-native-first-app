import {StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {COLORS} from '../../Utilities/Colors';
import {FONTSIZES} from '../../Utilities/FontSizes';
import TextContent from '../../Components/Text';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FONTS} from '../../Utilities/Fonts';

const Login = ({navigation}) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .min(5, 'Email must be 10 characters long')
      .max(30, 'Too Long!')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters long')
      .max(20, 'Password must be 20 characters long')
      .required('Password is required'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      handleLogin(values);
    },
  });

  const handleLogin = data => {};

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Png/animal.png')}
      />
      <InputBox
        placeholder="Enter your email"
        label="Email"
        value={values.email}
        onChangeText={handleChange('email')}
        errors={errors.email && touched.email ? true : null}
        errorText={errors.email}
      />
      <InputBox
        placeholder="Enter your password"
        label="Passoword"
        isPassword={true}
        value={values.password}
        onChangeText={handleChange('password')}
        errors={errors.password && touched.password ? true : null}
        errorText={errors.password}
      />
      <Button title="Login" onPress={handleSubmit} />

      <TextContent
        customTextStyles={styles.account}
        content="Don’t have an account ?"
      />

      <TextContent
        customTextStyles={styles.signUp}
        content="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        // isTouchable={true}
      />
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
    fontSize: FONTSIZES.medium,
    color: COLORS.grey,
    fontFamily: FONTS.Andika.bold,
  },
  signUp: {
    fontSize: FONTSIZES.small,
    color: COLORS.buttonBgColor,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 95,
    alignSelf: 'center',
  },
});
