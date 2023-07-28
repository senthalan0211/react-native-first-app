import {Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {COLORS} from '../../Utilities/Colors';
import {FONTSIZES} from '../../Utilities/FontSizes';
import {FONTS} from '../../Utilities/Fonts';
import TextContent from '../../Components/Text';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignUp = ({navigation}) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'name must be 5 characters long')
      .max(30, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .min(5, 'Email must be 10 characters long')
      .max(30, 'Too Long!')
      .required('Email is required'),
    mobile: Yup.string()
      .min(10, 'Number must be 10 digits')
      .max(10, 'Number must be 10 digits!')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        'Password and confirm password  must match',
      )
      .required('confirm Password is required'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleSignUp(values);
    },
  });

  const handleSignUp = data => {};
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Png/animal.png')}
      />
      <InputBox
        placeholder="Enter your name"
        label="Name"
        value={values.name}
        errors={errors.name && touched.name ? true : null}
        errorText={errors.name}
        onChangeText={handleChange('name')}
      />
      <InputBox
        placeholder="Enter your email id"
        label="Email"
        value={values.email}
        errors={errors.email && touched.email ? true : null}
        errorText={errors.email}
        onChangeText={handleChange('email')}
      />
      <InputBox
        placeholder="Enter your mobile number"
        label="Mobile"
        value={values.mobile}
        errors={errors.mobile && touched.mobile ? true : null}
        errorText={errors.mobile}
        onChangeText={handleChange('mobile')}
        maxLength={10}
        keyboardType="numeric"
      />
      <InputBox
        placeholder="Enter your password"
        label="Password"
        isPassword={true}
        value={values.password}
        errors={errors.password && touched.password ? true : null}
        errorText={errors.password}
        onChangeText={handleChange('password')}
      />
      <InputBox
        placeholder="Enter your confirm password"
        label="Confirm Passoword"
        isPassword={true}
        value={values.confirmPassword}
        errors={errors.confirmPassword && touched.confirmPassword ? true : null}
        errorText={errors.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
      />
      <Button title="Sign up" onPress={handleSubmit} />

      <TextContent
        content="Already have an account ?"
        customTextStyles={styles.account}
      />

      <TextContent
        content="Login"
        onPress={() => navigation.navigate('Login')}
        customTextStyles={styles.signUp}
        isTouchable={true}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
    // flex: 1,
    justifyContent: 'center',
  },
  account: {
    fontSize: FONTSIZES.medium,
    color: COLORS.grey,
    fontFamily: FONTS.Andika.bold,
    textAlign: 'left',
  },
  signUp: {
    fontSize: FONTSIZES.small,
    color: COLORS.buttonBgColor,
    marginBottom: 20,
    textAlign: 'left',
  },
  logo: {
    width: 120,
    height: 95,
    alignSelf: 'center',
  },
});
