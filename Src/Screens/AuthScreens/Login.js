import {StyleSheet, Image, ScrollView, Animated, Easing} from 'react-native';
import React, {useRef} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {COLORS} from '../../Utilities/Colors';
import {FONTSIZES} from '../../Utilities/FontSizes';
import CustomText from '../../Components/CustomText';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FONTS} from '../../Utilities/Fonts';
import {useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
EncryptedStorage;

const Login = ({navigation}) => {
  const userData = useSelector(state => state.auth.userData);
  console.log('🚀 ~ file: Login.js:15 ~ Login ~ userData:', userData);
  const imageRef = useRef(null);

  const positionX = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.sequence([
      Animated.timing(positionX, {
        toValue: 180,
        duration: 9000,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
      Animated.timing(positionX, {
        toValue: 0,
        duration: 9000,
        useNativeDriver: false,
      }),
    ]),
  ).start();

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
  const handleLogin = async data => {
    // try {
    //   const userData = await EncryptedStorage.getItem('ISLOGIN');
    //   if (
    //     userData.email === data.email &&
    //     userData.password === data.password
    //   ) {
    //     navigation.navigate('DashBoard');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {/* <Image
        style={styles.logo}
        // source={require('../../Assets/Png/animal.png')}
        source={{
          uri: 'https://cdn.pixabay.com/animation/2023/07/01/12/25/12-25-50-208_512.gif',
        }}
      /> */}
      <Animated.Image
        source={{
          uri: 'https://cdn.pixabay.com/animation/2023/07/01/12/25/12-25-50-208_512.gif',
        }}
        style={[styles.logo, {transform: [{translateX: positionX}]}]}
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

      <CustomText
        customTextStyles={styles.account}
        content="Don’t have an account ?"
      />

      <CustomText
        customTextStyles={styles.signUp}
        content="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        isTouchable={true}
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
    backgroundColor: COLORS.white,
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
    // width: 120,
    // height: 95,
    width: 190,
    height: 100,
    // alignSelf: 'center',
  },
});
