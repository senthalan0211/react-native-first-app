import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTSIZES} from '../Utilities/FontSizes';
import {FONTS} from '../Utilities/Fonts';

const InputBox = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  customInputStyles,
  customLabelStyles,
  errorText = '',
  isShownLabel = true,
  errors,
  keyboardType,
  placeholderTextColor,
  maxLength,
  editable,
  setPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      {isShownLabel && label ? (
        <Text style={[styles.label, {...customLabelStyles}]}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={[styles.placeholder, {...placeholderTextColor}]}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, {...customInputStyles}]}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        secureTextEntry={setPassword ? !showPassword : false}
      />

      {setPassword ? (
        <TouchableOpacity
          onPress={handlePassword}
          style={styles.eyeBtn}
          activeOpacity={0.8}>
          <Image
            style={styles.eye}
            source={
              showPassword
                ? require('../Assets/Png/eyeOpen.png')
                : require('../Assets/Png/eyeClose.png')
            }
          />
        </TouchableOpacity>
      ) : null}

      {errors ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  InputBox: {
    fontSize: FONTSIZES.small,
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 2,
    paddingLeft: 20,
    position: 'relative',
  },
  placeholder: {
    color: COLORS.placeHolderColor,
  },
  label: {
    fontSize: FONTSIZES.medium,
    color: COLORS.black,
    fontFamily: FONTS.Andika.bold,
    alignItems: 'flex-start',
    paddingBottom: 3,
    paddingTop: 5,
  },
  error: {
    fontSize: FONTSIZES.tiny,
    color: COLORS.red,
    fontFamily: FONTS.Andika.regular,
    opacity: 0.7,
    marginVertical: 1,
  },
  eye: {
    width: 25,
    height: 16,
  },
  eyeBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
